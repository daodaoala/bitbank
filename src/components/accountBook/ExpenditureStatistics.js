import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Donut } from "britecharts-react";
import ApexChart from 'react-apexcharts';
import { store } from '../stores/Store';
import Loader from "./../common/Loader"

const ExpenditureStatistics = () => {
    const API_SERVER = "https://gateway.bitbank.click";
    let [loading, setLoading] = useState(false);   
    let now = new Date();                           //현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1;            //월 구하기
    const [monthlyTotal, setMonthlyTotal] = useState();
    const [weeklyTotalList, setWeeklyTotalList] = useState([]);
    const [donutGraphList, setDonutGraphList] = useState([]);
    const [lineGraphDayList, setlineGraphDayList] = useState([]);
    const [lineData, setLineData] = useState([])


    useEffect(()=> {
        geteExpenditure();
    }, [])

    // 알림 목록 조회
    const geteExpenditure = async() => {
        setLoading(true);
        try {
                const headers = {
                    'Authorization': `${store.accessToken}`,
                };
                const response = await axios.get( API_SERVER +'/account-book/statistic/expenditure',{ headers ,
                    params: {
                        memberId : store.memberId,
                        month : todayMonth,
                    }
                });
                console.log( '월 별 지출 통계 조회', response.data )
                if( response.status === 200 && response.data.rt === 200 ){   
                    setMonthlyTotal(comma(response.data.monthlyTotal));
                    setWeeklyTotalList(response.data.weeklyTotalDTOList);
                    setDonutGraphList(response.data.donutGraphDTOList);
                    setLineData(response.data.lineGraphDailyTotalList)
                    setlineGraphDayList(response.data.lineGraphDayList);
                }    
        } catch (e) {
            console.log( 'e', e.response );
        }
        setLoading(false);
    }

    function comma(str) {
        str = String(str);
        var minus = str.substring(0, 1);
     
        str = str.replace(/[^\d]+/g, '');
        str = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    
        if(minus == "-") str = "-"+str;
     
        return str;
    }

    
    return (
        <div>
            <Loader loading={loading}/>
            <div>
                <div className={clsx('padding_10', 'margin_10', 'info7')}>{todayMonth}월 지출</div>
                <div className={clsx('padding_10', 'subtitle_7')}>{monthlyTotal}원</div>
                <Link to='/books/incomestatistics'>
                    <Box className={clsx('statistic_btn')}>
                        <div>수입 통계</div>
                    </Box>
                </Link>
            </div>
            <Grid container>
                <Grid item xs={12} style={{ justifyContent: 'center', marginTop: '20px' }}> 
                    <div className='books_paper'>
                        <div className={clsx('subtitle_7')}>요약</div>
                        {weeklyTotalList && weeklyTotalList.map((data, i) => (
                            <div className={clsx('books_data', 'between')} key={data.week+i}>  
                                <div className='info5'>{data.week}</div>
                                <div className='books_price'>{comma(data.total)}원</div>
                            </div>
                        ))}
                        <hr/>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info7'>총 지출</div>
                            <div className='books_price'>{monthlyTotal}원</div>
                        </div>
                    </div>    

                    <div className='statistic_paper'>
                        <div className={clsx('subtitle_7', 'margin_30')}>통계</div>
                        <div className={clsx('item_center')}>
                            <Donut
                                data={donutGraphList}
                                externalRadius={150}
                                internalRadius={60}
                                highlightSliceById={1}   //해당 슬라이드 id 강조
                                hasHoverAnimation={true}
                                isAnimated={true}
                            />
                        </div>
                    </div>     

                    <div className='statistic_paper'>
                        <div className={clsx('subtitle_7', 'margin_30')}>일별 추이</div>
                        <div className={clsx('item_center')}>
                            <ApexChart
                                type="area"
                                options={{
                                    series: [{
                                        name: '금액',
                                        data: lineData
                                    }],
                                    chart: {
                                        type: 'area',
                                        stacked: true,
                                        height: 350,
                                        zoom: {
                                          type: 'x',
                                          enabled: true,
                                          autoScaleYaxis: true
                                        },
                                        toolbar: {
                                          autoSelected: 'zoom'
                                        }
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    markers: {
                                    size: 0,
                                    },
                                    xaxis: {
                                        type: 'datetime',
                                        categories: lineGraphDayList,
                                        // tickAmount: 10,
                                        labels: {
                                            formatter: function(value, timestamp, opts) {
                                                console.log("timestamp",timestamp)
                                                return opts.dateFormatter(new Date(timestamp), 'dd')
                                            }
                                        }
                                    },
                                    fill: {
                                        type: 'gradient',
                                        gradient: {
                                          shadeIntensity: 1,
                                          inverseColors: false,
                                          opacityFrom: 0.5,
                                          opacityTo: 0,
                                          stops: [0, 90, 150]
                                        },
                                      },
                                    yaxis: {
                                    },
                                    tooltip: {
                                        shared: false,
                                        y: {
                                          formatter: function (val) {
                                            return (val / 1000000).toFixed(0)
                                          }
                                        }
                                    },
                                }}
                                series={
                                    [{
                                        name: '금액',
                                        data: lineData
                                    }]
                                }
                                width={350}
                                height={300}
                                id= "lineChart"
                            />
                        </div>
                    </div>        
                </Grid>
            </Grid>
        </div>
    );
}

export default ExpenditureStatistics;




// const [lineData, setLineData] = useState({
//     options : {
//         series: [{
//             name: 'Sales',
//             data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
//         }],
//         chart: {
//             height: 400,
//             type: 'line',
//         },
//         forecastDataPoints: {
//             count: 7
//         },
//         stroke: {
//             width: 5,
//             curve: 'smooth'
//         },
//         xaxis: {
//             type: 'datetime',
//             categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
//             tickAmount: 10,
//             labels: {
//                 formatter: function(value, timestamp, opts) {
//                     return opts.dateFormatter(new Date(timestamp), 'dd MMM')
//                 }
//             }
//         },
//         title: {
//             text: 'Forecast',
//             align: 'left',
//             style: {
//             fontSize: "16px",
//             color: '#666'
//             }
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//             shade: 'dark',
//             gradientToColors: [ '#FDD835'],
//             shadeIntensity: 1,
//             type: 'horizontal',
//             opacityFrom: 1,
//             opacityTo: 1,
//             stops: [0, 100, 100, 100]
//             },
//         },
//         yaxis: {
//             min: -10,
//             max: 40
//         },
//         responsive: [{
//             breakpoint: 500,
//             options: {
//                 width: 450,
//                 height: 400
//             },
//             breakpoint: 400,
//             options: {
//                 width: 320,
//                 height: 300
//             },
//         }]
//     }
// })

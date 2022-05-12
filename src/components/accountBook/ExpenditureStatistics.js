import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Donut } from "britecharts-react";
import ApexChart from 'react-apexcharts';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "IBM Plex Sans KR",
        display: "flex",
    },
}));

const style = {
    width: '100%',
    maxWidth: 320,
    bgcolor: 'rgba(242, 242, 242, 0.7)',
};

const ExpenditureStatistics = () => {
    const classes = useStyles();
    let [loading, setLoading] = useState(false);   
    let now = new Date();                           //현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1;            //월 구하기
    const [lineData, setLineData] = useState({
        options : {
            series: [{
            name: 'Sales',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            chart: {
            height: 350,
            type: 'line',
            },
            forecastDataPoints: {
                count: 7
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                tickAmount: 10,
                labels: {
                    formatter: function(value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                    }
                }
            },
            title: {
                text: 'Forecast',
                align: 'left',
                style: {
                fontSize: "16px",
                color: '#666'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
                },
            },
            yaxis: {
                min: -10,
                max: 40
            }
        }
    })

    const with4Slices = () => [
        {
          quantity: 60,
          percentage: 60,
          name: "React",
          id: 1
        },
        {
          quantity: 20,
          percentage: 20,
          name: "Ember",
          id: 2
        },
        {
          quantity: 10,
          percentage: 10,
          name: "Angular",
          id: 3
        },
        {
          quantity: 10,
          percentage: 10,
          name: "Backbone",
          id: 4
        }
    ];

    
    return (
        <div>
            <div>
            <div className='month'>{todayMonth}월 지출</div>
            <div className='subtitle_7'>300.000원</div>
            <div className='flex'>
                <div className='info3'>수입</div>
                <div className='subtitle_6'>450.000원</div>
            </div>
            </div>
            <Grid container>
                <Grid item xs={12} style={{ justifyContent: 'center', marginTop: '20px' }}> 
                    <div className='books_paper'>
                        <div className='info4'>요약</div>
                        <hr/>
                        <div className={clsx('books_data', 'around')}>  
                            <div className='info5'>5월 1주</div>
                            <div className='books_price'>200.000원</div>
                        </div>
                        <div className={clsx('books_data', 'around')}>  
                            <div className='info5'>5월 2주</div>
                            <div className='books_price'>60.000원</div>
                        </div>
                        <div className={clsx('books_data', 'around')}>  
                            <div className='info5'>5월 3주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <div className={clsx('books_data', 'around')}>  
                            <div className='info5'>5월 4주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <div className={clsx('books_data', 'around')}>  
                            <div className='info5'>5월 5주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>총 지출</div>
                            <div className='books_price'>300.000원</div>
                        </div>
                    </div>    

                    <div className='books_paper'>
                        <div className='info4'>통계</div>
                        <div className={clsx('item_center')}>
                            <Donut
                                data={with4Slices}
                                externalRadius={150}
                                internalRadius={47}
                                highlightSliceById={1}   //해당 슬라이드 id 강조
                                hasHoverAnimation={true}
                                isAnimated={true}
                            />
                        </div>
                    </div>     

                    <div className='books_paper'>
                        <div className='info4'>일별 추이</div>
                        <div className={clsx('item_center')}>
                        <ApexChart
                            type="line"
                            options={lineData.options}
                            series={lineData.options.series}
                            width={500}
                            height={300}
                        />
                        </div>
                    </div>        
                </Grid>
            </Grid>
        </div>
    );
}

export default ExpenditureStatistics;

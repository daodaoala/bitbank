import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Donut } from "britecharts-react";

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

const IncomeStatistics = () => {
    const classes = useStyles();
    let [loading, setLoading] = useState(false);   
    let now = new Date();                           //현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1;            //월 구하기
  
    const with4Slices = () => [
        {
          quantity: 60,
          percentage: 60,
          name: "React",
          id: 1
        },
        {
          quantity: 30,
          percentage: 40,
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
                <div className={clsx('padding_10', 'margin_10', 'info7')}>{todayMonth}월 수입</div>
                <div className={clsx('padding_10', 'subtitle_7')}>450.000원</div>
                <Link to='/books/expenditurestatistics'>
                    <Box className={clsx('statistic_btn','flex')}>
                        <div className='info8'>지출 통계</div>
                    </Box>
                </Link>
            </div>
            <Grid container>
                <Grid item xs={12} style={{ justifyContent: 'center', marginTop: '20px' }}> 
                    <div className='books_paper'>
                        <div className={clsx('subtitle_7')}>요약</div>
                        {/* <hr/> */}
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>5월 1주</div>
                            <div className='books_price'>200.000원</div>
                        </div>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>5월 2주</div>
                            <div className='books_price'>60.000원</div>
                        </div>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>5월 3주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>5월 4주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info5'>5월 5주</div>
                            <div className='books_price'>10.000원</div>
                        </div>
                        <hr/>
                        <div className={clsx('books_data', 'between')}>  
                            <div className='info7'>총 지출</div>
                            <div className='books_price'>300.000원</div>
                        </div>
                    </div>     

                    <div className='statistic_paper'>
                        <div className={clsx('subtitle_7', 'margin_30')}>통계</div>
                        <div className={clsx('item_center')}>
                            <Donut
                                data={with4Slices}
                                externalRadius={150}
                                internalRadius={80}
                                highlightSliceById={1}   //해당 슬라이드 id 강조
                                hasHoverAnimation={true}
                                isAnimated={true}
                            />
                        </div>
                    </div>            
                </Grid>
            </Grid>
        </div>
    );
}

export default IncomeStatistics;

import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Link, useHistory  } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "IBM Plex Sans KR",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 300,
        },
        display: "flex",
    },
}));


const CardRanking = () => {
    const classes = useStyles();
    let history = useHistory();
    let [loading, setLoading] = useState(false);   

    const goBack = (e) => {
        history.goBack();
    };
    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <div className='center'>
                <ArrowBackIosIcon style={{margin: '8px 15px 0 -30px'}} onClick={goBack}/>
                <div className={clsx('item_center','subtitle_2')}>인기카드 Top 10</div>
            </div>
            <div className={clsx('item_center','subtitle_3')}>카드사의 대표적인<br/>1위부터 10위 카드를 소개합니다!</div>
            <Grid container>
                <Grid item xs={12} style={{ justifyContent: 'center' }}>
                    <div className='paper'>
                        <div className='card_company'>삼성카드</div>
                        <div className='card_name'>1. 삼성카드 taptap O</div>
                        <img src="http://db.kookje.co.kr/news2000/photo/2017/0915/L20170915.99099006474i1.jpg?37" height="80" width="150"/>
                        <div className='tag_btn'>대형마트 할인</div>
                        <div className='card_benefit'>삼성이 혜택을 책임지고 다 드립니다. 통신비에서 10프로 할인까지!</div>
                    </div>
                    <div className='paper'>
                        <div className='card_company'>KB국민카드</div>
                        <div className='card_name'>2. KB국민 청춘대로 매니아i카드</div>
                        <img src="https://blog.kakaocdn.net/dn/bbr8ku/btrfG14HdFy/ZOuwNuAMcTmG6KBYUOIvJ0/img.jpg" height="80" width="150"/>
                        <div className='tag_btn'>통신비 할인</div>
                        <div className='card_benefit'>KB국민이 혜택을 책임지고 다 드립니다. 통신비에서 10프로 할인까지!</div>
                    </div>               
                </Grid>
            </Grid>
        </div>
    );
}

export default CardRanking;

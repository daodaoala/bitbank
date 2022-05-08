import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';


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


const Matching = ( {match} ) => {
    const classes = useStyles();
    let history = useHistory();
    let [loading, setLoading] = useState(false);   

    useEffect(() => {
        const categoryParam = match.params.category;
    },[ match.params.category ])

    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                <img src="./img/logo.png" width="23px" height="35px" style={{margin:"28px 0", paddingLeft:"30px"}}/>
                <div className='logo_subtitle'>ITBANK</div>
            </Grid>
            <Grid container style={{marginTop:"50px"}}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to='/cards/questions'>
                        <button className={clsx('btn_1', 'margin_30')}>
                            나의 BEST 카드 찾기
                        </button>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to='/cards/ranking'>
                        <button className={clsx('btn_2', 'margin_30')}>
                            인기카드 Top 10
                        </button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Matching;

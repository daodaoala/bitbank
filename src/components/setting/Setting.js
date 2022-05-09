import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
}));


const Setting = () => {
    const classes = useStyles();
    let history = useHistory();
    let [loading, setLoading] = useState(false);   


    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                <img src="./img/logo.png" width="23px" height="35px" style={{margin:"28px 0", paddingLeft:"30px"}}/>
                <div className='logo_subtitle'>ITBANK</div>
            </Grid>
            <Grid container style={{marginTop:"50px"}}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to='mypage'>
                        <button className={clsx('btn_1')}>
                           마이페이지
                        </button>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <button className={clsx('btn_1', 'margin_30')}>
                        로그아웃
                    </button>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to='/policy'>
                        <button className={clsx('btn_2')}>
                            약관 및 정책
                        </button>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                    <button className={clsx('btn_3', 'margin_30')}>
                        회원 탈퇴
                    </button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Setting;

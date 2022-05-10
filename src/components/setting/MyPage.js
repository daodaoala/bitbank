import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: "30px 0"
    },
}));


const MyPage = () => {
    const classes = useStyles();
    let [loading, setLoading] = useState(false);   
    const [userInfo, setUserInfo] = useState({
        memberPassword: 'abcdefg1!',
        memberName: '권설아',
    });
    const [validCheck, setValidCheck] = useState(false);  
    const [editCheck, setEditCheck] = useState(false);  
    const { memberPassword, memberName } = userInfo;

    const isValidInput = memberName.length >= 1 && memberPassword.length >= 1;
    const specialCharacter = memberPassword.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = memberPassword.length >= 6 && specialCharacter >= 1;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleValidButton = () => {
        if ( !isValidInput ) {
            alert('회원정보를 전부 입력해주세요');
        } else if ( !isValidPassword ) {
          alert('비밀번호 형식을 맞춰주세요.');
        }
    };

    const handleEditChange = (e) => {
        e.preventDefault();
        setEditCheck(!editCheck);
    }

    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                <div className="subtitle_2">회원 정보 수정</div>
            </Grid>
            <hr/>
                <div className="info1">
                    회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의 명백한 동의 없이 공개 또는 제 3자에게 제공되지 않습니다. 
                </div>
            <hr/>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs={12} style={{ justifyContent: 'center' }}>
                        <div className={clsx('between', 'margin_30')}>
                            <div className='form_name'>이름</div>
                            <div>
                                {!editCheck ? (
                                    <input type="text" placeholder="이름을 입력하세요" className='form_txt_1' value={memberName} disabled/>
                                ):(
                                    <input type="text" placeholder="이름을 입력하세요" className='form_txt_1' value={memberName} name="memberName" onChange={handleChange} />
                                )}
                            </div>
                        </div>
                        <div className={clsx('between', 'margin_30')}>
                            <div className='form_name'>비밀번호</div>
                            <div>
                                {!editCheck ? (
                                    <input type="password" placeholder="영문/숫자/특수문자 포함 6자 이상 비밀번호를 입력하세요" className='form_txt_1' value={memberPassword} disabled/>
                                ):(
                                    <input type="password" placeholder="영문/숫자/특수문자 포함 6자 이상 비밀번호를 입력하세요" className='form_txt_1' value={memberPassword} name="memberPassword" onChange={handleChange}/>
                                )}
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                        {!editCheck ? (
                            <button className={clsx('btn_1', 'margin_30')} onClick={handleEditChange}>
                                수정
                            </button>
                        ):(
                            <>
                                <button className={clsx('btn_4', 'margin_30_10')} onClick={handleEditChange}>
                                    취소 
                                </button>
                                <button className={clsx('btn_4', 'margin_30_10')}>
                                    적용
                                </button>
                            </>
                        )}
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default MyPage;

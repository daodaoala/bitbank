import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Loader from "./../common/Loader"
import Modal from "./../common/Modal"


const MyPage = () => {
    let [loading, setLoading] = useState(false);   
    const [userInfo, setUserInfo] = useState({
        memberPassword: 'abcdefg1!',
        memberName: '권설아',
    }); 
    const [editCheck, setEditCheck] = useState(false);
    const [open, setOpen] = useState(false);   
    const [notice, setNotice] = useState();           //모달 멘트 설정

    const { memberPassword, memberName } = userInfo;

    const isValidName = memberName.length >= 1;
    const specialCharacter = memberPassword.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = memberPassword.length >= 6 && specialCharacter >= 1;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleEditChange = (e) => {
        e.preventDefault();
        setEditCheck(!editCheck);
    }

    
    const handleValid = (e) => {
        e.preventDefault();
        if ( !isValidName ) {
            setNotice("이름을 입력하세요.")
            setOpen(true);
        } else if ( !isValidPassword ) {
            setNotice("입력하신 비밀번호가 형식에 맞지 않습니다.\n6자 이상의 영문/숫자/특수문자를 사용하세요.")
            setOpen(true);
        }
    };

    const handleClose = (value) => {
        setOpen(value);
    }

    return (
        <div>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                <div className="subtitle_2">회원 정보 수정</div>
            </Grid>
            <hr/>
                <div className="info1">
                    회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의 명백한 동의 없이 공개 또는 제 3자에게 제공되지 않습니다. 
                </div>
            <hr/>
            <form className={clsx("flex","margin_30")} noValidate autoComplete="off">
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
                                <button className={clsx('btn_4', 'margin_30_10')} onClick={handleValid}>
                                    적용
                                </button>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                          <Loader loading={loading} />
                    </Grid> 
                </Grid>
            </form>
            {open && (
                <Modal notice={notice} onClose={handleClose}/>
            )}
        </div>
    );
}

export default MyPage;

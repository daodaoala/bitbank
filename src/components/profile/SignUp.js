import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

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


const SignUp = () => {
    const classes = useStyles();
    let [loading, setLoading] = useState(false);   
    const [userInfo, setUserInfo] = useState({
        memberLoginid: '',
        memberPassword: '',
        memberName: '',
    });

    const { memberLoginid, memberPassword, memberName } = userInfo;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleClick();
        }
    }

    const handleClick = () => {
        if (!memberLoginid) {
            // Swal.fire({
            //     text: "아이디를 입력해주세요",
            //     icon: "warning",
            //     confirmButtonText: "확인",
            //     buttons: {
            //         cancel: "확인",
            //     },
            // });
        }
        else if (!memberPassword) {
            // Swal.fire({
            //     text: "비밀번호를 입력해주세요",
            //     icon: "warning",
            //     confirmButtonText: "확인",
            //     buttons: {
            //         cancel: "확인",
            //     },
            // });
        }
        // else getLogin(userInfo);
    }

    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                <img src="./img/logo.png" width="23px" height="35px" style={{margin:"28px 0", paddingLeft:"30px"}}/>
                <div className='logo_subtitle'>ITBANK</div>
            </Grid>
            <div className="subtitle">회원가입</div>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs={12} style={{ justifyContent: 'center' }}>
                        <div style={{display:"flex", justifyContent:"space-between", margin:"20px 0"}}>
                            <div className='form_name'>이름</div>
                            <div>
                                {/* <TextField
                                    id="memberName"
                                    placeholder="이름을 입력하세요"
                                    variant="outlined"
                                    // size="medium"
                                    name="memberName"
                                    value={memberName}
                                    // error={memberLoginid === "" ? true : false}
                                    onChange={handleChange}
                                    onKeyPress={onKeyPress}
                                /> */}
                                <input type="text" placeholder="이름을 입력하세요" className='form_txt' value={memberName}/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", margin:"20px 0"}}>
                            <div className='form_name'>아이디</div>
                            <div>
                                <input type="text" placeholder="아이디를 입력하세요" className='form_txt' value={memberLoginid}/>
                                {/* <TextField
                                    id="memberLoginid"
                                    placeholder="아이디를 입력하세요"
                                    variant="outlined"
                                    // size="medium"
                                    name="memberLoginid"
                                    value={memberLoginid}
                                    // error={memberLoginid === "" ? true : false}
                                    onChange={handleChange}
                                    onKeyPress={onKeyPress}
                                /> */}
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", margin:"20px 0"}}>
                            <div className='form_name'>비밀번호</div>
                            <div>
                                <input type="text" placeholder="비밀번호를 입력하세요" className='form_txt' value={memberPassword}/>
                                {/* <TextField
                                    id="memberPassword"
                                    placeholder="비밀번호를 입력하세요"
                                    variant="outlined"
                                    size="large"
                                    name="memberPassword"
                                    value={memberPassword}
                                    // error={memberPassword === "" ? true : false}
                                    onChange={handleChange}
                                    type="memberPassword"
                                    onKeyPress={onKeyPress}
                                /> */}
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                        <button className='btn_1' onClick={handleClick}>
                            완료
                        </button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default SignUp;

import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Link, useHistory  } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const useStyles = makeStyles((theme) => ({
    appBar: {
        "&.MuiAppBar-root":{
            padding: "10px 5px 5px",
        },
    },
    appBar1: {
        "&.MuiAppBar-root":{
            padding: "0px 0 10px",
            marginTop: "65px",
        },
        "& .menu_appbar":{
            [theme.breakpoints.down('mobile')]: {
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: "60px",
                backgroundColor: '#F2F2F2',
            }
        }
    },
}));

const MenuHeader = () => {
    const cls = useStyles();
    let history = useHistory();
    const [menu, setMenu] = useState(4); 

    const goBack = (e) => {
        history.goBack();
    };

    return (
        <>
            <AppBar className={cls.appBar}>
                <Container maxWidth="sm" style={{padding:"0px"}}>
                   <div className='between'>
                        <div>
                            <ArrowBackIosIcon style={{margin: '10px 0', color: '#6E6E6E'}} onClick={goBack}/>
                        </div>
                        <Box display="flex">
                            <img src="./img/logo.png" width="17px" height="25px" style={{margin:"10px 20px"}}/>
                            <div className='logo' onClick={() => window.location.replace("/")}>ITBANK</div>
                        </Box>
                        <Link to='/login'>
                            <Box onClick={()=>setMenu(4)}>
                                <button className="loginBtn">로그인</button>
                            </Box>
                        </Link>
                    </div>
                </Container>
            </AppBar>
            <AppBar className={cls.appBar1}>
                <Container maxWidth="sm" style={{padding:"0px"}}>
                    <div className={clsx('around', 'menu_appbar')}>
                        <Box className={clsx("header_menu", "txt_left", menu===0 && "clickedMenu")} onClick={()=>setMenu(0)}>가계부</Box>
                        <Link to='/cards'>
                            <Box className={clsx("header_menu", "txt_center", menu===1 && "clickedMenu")} onClick={(e)=>setMenu(1)}>금융매칭</Box>
                        </Link>
                        <Link to='/setting'>
                            <Box className={clsx("header_menu", "txt_right", menu===2 && "clickedMenu")} onClick={()=>setMenu(2)}>설정</Box>
                        </Link>
                    </div>
                </Container>
            </AppBar>
        </>
    );
}

export default MenuHeader;

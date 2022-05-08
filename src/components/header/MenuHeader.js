import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Link, useHistory  } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const useStyles = makeStyles((theme) => ({
    appBar: {
        "&.MuiAppBar-root":{
            backgroundColor: '#F2F2F2',
            borderBottom:"1px solid #F2F2F2",
            padding: "20px 3px 10px"
            // boxShadow: "none"
        },
    },
    mainToolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuContainer: {
        display: 'flex',
        cursor: "pointer",
        justifyContent: "space-between",
        // minWidth: "600px"
    },
    menuButton: {
        // // fontSize: "17px",
        // color: "#1b1b1b",
        // fontWeight: "bold",
        // lineHeight: "27px",
        // margin:"0 35px",
        // padding: "15px 0 14px",
        // whiteSpace:"nowrap",
        // '&:hover':{
        //     borderBottom:"4px solid #fe9601",
        // }
    },
}));

const MenuHeader = () => {
    const cls = useStyles();
    let history = useHistory();
    const [menu, setMenu] = useState(0); 

    return (
        <>
            <AppBar className={cls.appBar}>
                <Container maxWidth="sm" style={{padding:"0px"}}>
                   <Box display="flex" justifyContent="space-between">
                        <Box display="flex">
                            <img src="./img/logo.png" width="15px" height="20px" style={{margin:"10px 0"}}/>
                            <div className='logo' onClick={() => window.location.replace("/")}>ITBANK</div>
                        </Box>
                        <Box className={clsx("header_menu", menu===0 && "clickedMenu")} onClick={()=>setMenu(0)}>가계부</Box>
                        <Link to='/cards'>
                            <Box className={clsx("header_menu", menu===1 && "clickedMenu")} onClick={(e)=>{setMenu(1); history.push("/cards");}}>금융매칭</Box>
                        </Link>
                        <Box className={clsx("header_menu", menu===2 && "clickedMenu")} onClick={()=>{setMenu(2); window.location.replace("/cards");}}>설정</Box>
                        <Box alignItems="center">
                            <button className="loginBtn" onClick={() => window.location.replace("/login")}>로그인</button>
                        </Box>
                    </Box>
                </Container>
            </AppBar>

        </>
    );
}

export default MenuHeader;

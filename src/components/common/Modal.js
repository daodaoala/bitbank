import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';


const Modal = () => {


    return (
        <div>
            <div className="container">
                <div className="popup-wrap" > 
                    <div className="popup">	
                        <div className="popup-body">
                            <div className="body-content">
                                <div className="body-titlebox">
                                    <ErrorOutlineIcon style={{fontSize: '47px'}}/>
                                </div>
                                <div className="body-contentbox">
                                    이름을 입력하세요.
                                </div>
                            </div>
                        </div>
                        <div className="popup-footer">
                            <Box className="pop-btn" onClick={()=>setNameCheck(false)}>확인</Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;


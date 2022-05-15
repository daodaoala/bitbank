import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';


const Modal = ({notice, onClose}) => {

    const handleClose = () => {
        onClose(false)
    }

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
                                    {notice}
                                </div>
                            </div>
                        </div>
                        <div className="popup-footer">
                            <Box className="pop-btn" onClick={handleClose}>확인</Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;


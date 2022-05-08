import React, { useState, useEffect, useRef } from 'react'
import { Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Home from './Home'
import Login from './profile/Login'
import SignUp from './profile/SignUp'
import Matching from './financialMatching/Matching'
import Poll from './financialMatching/Poll'
import CardRecommendation from './financialMatching/CardRecommendation'
import CardRanking from './financialMatching/CardRanking'

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:"110px", 
        padding: "0 100px", 
        minHeight: "calc( 100vh - 594px )",
        height:"auto",
        [theme.breakpoints.up('lg')]: {
            padding: "0 300px", 
        },
        // backgroundColor:"#F2F2F2"
    }
}));

const Section = () => {
    const cls = useStyles();
    // const location = useLocation();

    return (
    <Box className={cls.root} display="flex" justifyContent="center">
        <Router>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/cards" component={Matching} exact/>
            <Route path="/questions" component={Poll} exact/>
            <Route path="/profits" component={CardRecommendation} exact/>
            <Route path="/ranking" component={CardRanking} exact/>
        </Router>
    </Box>

    );

}

export default Section;
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import moment from 'moment';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import History from './SearchHistory.js'
import SearchBar from './SearchBar.js'
import { expenditureOptions, incomeOptions, transferOptions } from './categoryData';


const defaultMenuProps = {
    PaperProps: {
      style: {
        height: 200,
        overflow: "auto",
        boxShadow: "none",
        border: "1px solid #D8D8D8",
      },
    },
};

const BookSearch = () => {
    let [loading, setLoading] = useState(false);     
    const [searchList, setSearchList] = useState(0);                        // 검색어 목록
    const [accountBookType, setAccountBookType] = useState(0);              // 가계부 내역 유형
    const [expenditureType, setExpenditureType] = useState(["0"]);          // 지출 유형
    const [incomeType, setIncomeType] = useState(["0"]);                    // 수입 유형
    const [transferType, setTransferType] = useState(["0"]);                // 이체 유형
    const [searchDateType, setSearchDateType] = useState("A");              // 기간  
    const [searhStartDate, setSearhStartDate] = useState(new Date());       // 시작 날짜
    const [searchEndDate , setSearchEndDate] = useState(new Date());        // 종료 날짜
    const [keywords, setKeywords] = useState(                               // 검색어
        JSON.parse(localStorage.getItem('keywords') || '[]'),
    )

    useEffect(() => {
        localStorage.setItem('keywords', JSON.stringify(keywords))
    }, [])


    //검색어 추가
    const handleAddKeyword = (keyword) => {
        console.log('text', keyword)
        const newKeyword = {
            id: Date.now(),
            keyword: keyword,                 //현재 입력한 검색어
        }
        setKeywords([newKeyword, ...keywords])
    }

    //검색어 삭제
    const handleRemoveKeyword = (id) => {
        const nextKeyword = keywords.filter((thisKeyword) => {
            return thisKeyword.id != id
        })
        setKeywords(nextKeyword)
    }
    
    //검색어 전체 삭제
    const handleClearKeywords = () => {
        setKeywords([])
    }

    // 가계부 내역 유형
    const selectType = (e, value) => {
        e.preventDefault();
        setAccountBookType(value);
    }

    // 시작 날짜 선택
    const handleSelectStartDate = (newValue) => {
        const date = moment(newValue).format('YYYY-MM-DD HH:mm:ss');    // 날짜 포맷
        console.log("date",date)
        setSearhStartDate(date);
    };

    // 종료 날짜 선택
    const handleSelectEndDate = (newValue) => {
        const date = moment(newValue).format('YYYY-MM-DD HH:mm:ss');    // 날짜 포맷
        console.log("date",date)
        setSearchEndDate(date);
    };

    //가계부 세부 내역 유형
    const selectCategory = (e) => {
        if(accountBookType === "P"){
            setExpenditureType(e.target.value);
        } else if(accountBookType === "I"){
            setIncomeType(e.target.value);
        } else if(accountBookType === "T"){
            setTransferType(e.target.value);
        } 
    }

    const getSearchList = (e) => {
        e.preventDefault();
        setSearchList(1)
    }
    
    return (
        <div className='filter'>
            <div className={clsx('item_center')}> 
                <SearchBar onAddKeyword={handleAddKeyword}></SearchBar>
            </div>
            <Grid item xs={12} style={{ justifyContent: 'center'}}> 
                <div>
                    <History
                        keywords={keywords}
                        onClearKeywords={handleClearKeywords}
                        onRemoveKeyword={handleRemoveKeyword}
                    />
                </div>    
            </Grid>
            
            <form className={clsx('item_center')} noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs={12} style={{ justifyContent: 'center' }}>
                        <div className={clsx('between', 'margin_20')}>
                            <div className='form_name'>분류</div>
                            <div className='center'>
                                <button className={clsx("categoryBtn", accountBookType==="P" && "clickCategoryBtn")}  onClick={(e) => selectType(e, "P")}>지출</button>
                                <button className={clsx("categoryBtn", accountBookType==="I" && "clickCategoryBtn")}  onClick={(e) => selectType(e, "I")}>수입</button>
                                <button className={clsx("categoryBtn", accountBookType==="T" && "clickCategoryBtn")}  onClick={(e) => selectType(e, "T")}>이체</button>
                            </div>
                        </div>
                        <div className={clsx('between', 'margin_20')}>
                            <div className='form_name'>카테고리</div>
                            <div>
                                {accountBookType ? (
                                // 분류 선택 시에 카테고리 활성화
                                <FormControl fullWidth style={{border: "1px solid #FFFFFF", borderRadius:"10px", margin: "0 5px 0 -10px"}}>
                                    <Select
                                        value={accountBookType === "P" ? expenditureType : accountBookType === "I" ? incomeType : transferType}
                                        onChange={(e)=>selectCategory(e)}
                                        style={{width: "230px", borderRadius:"10px"}}
                                        MenuProps={defaultMenuProps}
                                    >
                                    { accountBookType === "P" ? (
                                        expenditureOptions.map((option, index) => (
                                        <MenuItem
                                            value={option.id}
                                            key={"option"+index+1}
                                            disabled={index === 0}
                                            selected={index === expenditureType}
                                        >
                                            {option.data}
                                        </MenuItem>
                                    ))
                                    ) : ( accountBookType === "I" ? (
                                        incomeOptions.map((option, index) => (
                                            <MenuItem
                                                value={option.id}
                                                key={"option"+index+1}
                                                disabled={index === 0}
                                                selected={index === incomeType}
                                            >
                                                {option.data}
                                            </MenuItem>
                                        ))
                                    ):(
                                        transferOptions.map((option, index) => (
                                            <MenuItem
                                                value={option.id}
                                                key={"option"+index+1}
                                                disabled={index === 0}
                                                selected={index === transferType}
                                            >
                                                {option.data}
                                            </MenuItem>
                                        ))
                                    ))}
                                    </Select>
                                </FormControl>
                                ):(
                                    // 분류 선택안할 시에 카테고리 비활성화
                                    <FormControl fullWidth disabled style={{border: "1px solid #FFFFFF", borderRadius:"10px", margin: "0 5px 0 -10px"}}>
                                        <InputLabel>카테고리를 선택하세요.</InputLabel>
                                        <Select
                                            style={{width: "230px", borderRadius:"10px"}}
                                        >
                                        </Select>
                                    </FormControl>
                                )}
                            </div>
                        </div>
                        <div className={clsx('between', 'margin_20')}>
                            <div className='form_name'>기간</div>
                            <div className='center'>
                                <FormControl fullWidth style={{border: "1px solid #FFFFFF", borderRadius:"10px", margin: "0 5px 0 -10px"}}>
                                    <Select
                                            value={searchDateType}
                                            onChange={(e)=> setSearchDateType(e.target.value)}
                                            style={{width: "230px", borderRadius:"10px"}}
                                            MenuProps={defaultMenuProps}
                                    >
                                        <MenuItem value={"A"}>전체</MenuItem>
                                        <MenuItem value={"W"}>이번 주</MenuItem>
                                        <MenuItem value={"M"}>이번 달</MenuItem>
                                        <MenuItem value={"Y"}>이번 년도</MenuItem>
                                        <MenuItem value={"M3"}>최근 3개월</MenuItem>
                                        <MenuItem value={"M6"}>최근 6개월</MenuItem>
                                        <MenuItem value={"S"}>기간 설정</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        {searchDateType === "S" && (
                            <>
                                <div className={clsx('between', 'margin_20')}>
                                    <div className='form_name'>시작 날짜</div>
                                    <div className='center' style={{margin: "0 5px 0 -10px"}}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                value={searhStartDate}
                                                onChange={handleSelectStartDate}
                                                renderInput={(params) => <TextField {...params} />}
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                                <div className={clsx('between', 'margin_20')}>
                                    <div className='form_name'>종료 날짜</div>
                                    <div className='center' style={{margin: "0 5px 0 -10px"}}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                value={searchEndDate}
                                                onChange={handleSelectEndDate}
                                                renderInput={(params) => <TextField {...params} />}
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
                        <button className={clsx('btn_1', 'margin_40')} onClick={getSearchList}>
                            조회
                        </button>
                    </Grid>
                </Grid>
            </form>
            {searchList===1 && (
                <div className='books_paper'>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info4'>10일 화요일</div>
                    <div className='info4'>-85.000원</div>
                </div>
                <hr/>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>김밥나라</div>
                    <div className='books_price'>-5.000원</div>
                </div>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>LGUPLUS 통신 요금 자동 청구 5월</div>
                    <div className='books_price'>-60.000원</div>
                </div>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>홈플러스</div>
                    <div className='books_price'>-5.000원</div>
                </div>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>이마트</div>
                    <div className='books_price'>-5.000원</div>
                </div>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>신세계 백화점</div>
                    <div className='books_price'>-5.000원</div>
                </div>
                <div className={clsx('books_data', 'between')}>  
                    <div className='info5'>롯데마트</div>
                    <div className='books_price'>-5.000원</div>
                </div>
            </div>    
            )}
        </div>
    );
}

export default BookSearch;

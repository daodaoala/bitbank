import React from 'react'
import clsx from 'clsx';
import CancelIcon from '@mui/icons-material/Cancel';

function History({ keywords, onRemoveKeyword, onClearKeywords }) {
    console.log('keyword', keywords)

    if (keywords.length === 0) {
        return <div>최근 검색된 기록이 없습니다.</div>
    }

    return (
      <div>
        <div className='paper'>
          <div className={clsx('info4','between', 'margin_10')}>
              <div>최근 검색어</div>
              <div onClick={onClearKeywords}>전체삭제</div>
          </div>
          <div>
              {keywords.map(({ id, keyword }) => {
                  return (
                      <div key={id} className={clsx('info3', 'between', 'margin_20')}>
                          <div>{keyword}</div>
                          <CancelIcon style={{ color:"#848484", fontSize:"23px", cursor:"pointer" }}  onClick={() => {onRemoveKeyword(id)}}>삭제</CancelIcon>
                      </div>
                  )
              })}
          </div>
        </div>
      </div>
    )
}

export default History
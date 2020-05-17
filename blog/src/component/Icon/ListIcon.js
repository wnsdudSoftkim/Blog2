import React from 'react'
import styled from 'styled-components'

function ListIcon() {
    const ListIconBlock = styled.div`

        width:150px;
        height:50px;
        border:1px solid #dcdcdc;
        margin: 0 auto;
        font-size:14px;
        color:#000000;
        line-height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    `
    return (
        <ListIconBlock>
            목록더보기
        </ListIconBlock>

    )
}
export default ListIcon
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function HomeBtn() {
    const HomeBtnBlock =styled.div`
        position:absoulte;
        margin: 0 auto;
        margin-top:20px;
        width:100px;
        height:100px;
        border-radius:50%;
        border:1px solid gray;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:1px 1px 4px 4px #333;
        &:hover {
        }
        font-size:24px;
        font-weight:bold;
        .p {
            text-align:center;
            
        }

    
    
    `
    return (
        <HomeBtnBlock>
            <Link to ="/" style={{textDecoration:'none',color:"black"}}>
                <p className="p">Home</p>
            </Link>
        </HomeBtnBlock>
    )
}
export default HomeBtn
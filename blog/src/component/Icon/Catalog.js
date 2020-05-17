import React from 'react'
import styled from 'styled-components'
function Catalog() {
    const onClick =() => {
        window.location.assign('http://localhost:3000')
    }
    const CatalogBlock = styled.div`
        position:relative;
        bottom:0;
        left:92%;
        @media(max-width:767px) {
            left:89%;
        }
    
        @media(max-width:400px) {
            left:85%;
        }
        
       
        .box {
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid #a8a5a5;
            padding: 0 12px 0 11px;
            width:30px;
            height:30px;
            cursor:pointer;
            .p {
                font-size:12px;
                line-height:27px;
            }
        }
    
    `
    return (
        <CatalogBlock >
            <div className="box" onClick={onClick}>
                <p className="p">목록</p>
            </div>
        </CatalogBlock>
    )
}
export default Catalog
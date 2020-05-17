import React from 'react'
import styled from 'styled-components'

function ModalDelete() {
    const onClickYes =() => {
        window.location.assign("http://localhost:3000")
    }
    const ModalBlock = styled.div`
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.8);
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:NeoDunggeunmo;
        .Modal {
            background:#eee;
            padding:24px 16px;
            border-radius:4px;
            width:320px;
            .under {
                display:flex;
                .undertext {
                    font-size:8px;
                }
                .closewrapper {
                    margin-left:10px;
                    text-align:right;
                    .closebtn {
                        background:#eee;
                        box-sizing:border-box
                        outline:none;

                    }
                    .btn1 {
                        width:60px;
                        margin-right:10px;
                    }
                    .btn {
                        width:60px;
                    }
                }
            }
        }
    `
    return (
        <ModalBlock>
            <div className="Modal">
                <div className="ModalTitle">글 삭제</div>
                <p className="text">포스트 삭제 하시겠습니까?</p>
                <div className="under">
                    <div className="closewrapper">
                        <button className="closebtn btn1" onClick={onClickYes}>네</button>
                        <button className="closebtn btn2">
                           네
                        </button>
                    </div>
                </div>

            </div>
        </ModalBlock>
    )
}
export default ModalDelete
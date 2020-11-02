import React,{useState}from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {MdKeyboardReturn} from 'react-icons/md'
function Signin() {
    const [input,SetInput] = useState({email:'',password:''})
    const {email,password} = input
    const onChange = e => {
        const {value,name} = e.target
        SetInput({
            ...input,
            [name]:value
        })
    }
    const Sign =() => {
        axios.post('http://localhost:5000/Signin', {
            email,
            password
        }).then(res => {
            if(res.data==='Success') {
                window.location.assign('http://localhost:3000')
            }else {
                alert('아이디 혹은 비밀번호를 잘못입력하셨습니다')
            }
        }).catch(e => console.log(e.response))
    }
    const GlobalStyle = createGlobalStyle`
        body {
            background:#e9ecef;
        }
        
    `

    const SigninBlock = styled.div`
        width:512px;
        @media(max-width:512px) {
            width:384px;
        }
        @media(max-width:400px) {
            width:312px;
        }
        height:760px;
        position:relative;
        background:white;
        border-radius:16px;
        bix-shadow:0 0 8px rgba(0,0,0,0.04);
        margin:0 auto;
        margin-top:96px;
        margin-bottom:32px;
        display:flex;
        flex-direction:column;
        .Header {
            padding:48px 32px 24px 32px;
            border-bottom:1px solid #e9ecef;

            .H1 {
                margin:0;
                font-size:36px;
                color:#343940;
            }
            .text {
                font-size: 18px;
                color:#206997;
                margin-top:40px;
                font-weight:bold;

            }
        }
        .Section {
            flex:1;
            padding:30px 30px;
            padding-bottom:48px;
            overflow-y:auto;
            .Inner {
                .form {
                    display:flex;
                    flex-direction:column;    
                    .label {
                        font-size:16px;
                        font-family: 'Roboto', sans-serif;
                    }
                    .input {
                        margin-top:10px;
                        padding:6px;
                        border-radius:4px;
                        border:1px solid #dee2e6;
                        outline:none;
                        font-size:18px;
                        box-sizing:border-box;
                        &:hover {
                            color:#206997;
                        }
                    }
                  
                   
                }
            }
        }

    `
    const AnotherBlock = styled.div`
        margin-top:20px;
        display:flex;
        justify-content:space-evenly;
        .SignBtn {
            background:rgba(0,0,0,0.9);
            width:90px;
            height:20px;
            color:#fff;
            border-radius:4px;
            font-size:15.8px;
            padding:8px 16px;
            line-height:20px;
            border:1px solid rgba(0,0,0,0.9)
            font-weight:400;
            text-align:center;
            cursor:pointer;
        }
        .SignUp {
            background:rgba(0,0,0,0.9);
            width:90px;
            height:20px;
            color:#fff;
            border-radius:4px;
            font-size:15.8px;
            padding:8px 16px;
            line-height:20px;
            border:1px solid rgba(0,0,0,0.9)
            font-weight:400;
            text-align:center;
        }
    `
    const HomeBlock = styled.div`
        z-index:999;
        width:160px;
        height:80px;
        top:-100%;
        margin-top:20px;

    `

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <SigninBlock>
                <div className="Header">
                    <h1 className="h1">Sign In</h1>
                    <span className="text">관리자 로그인</span>
                </div>
                <div className="Section">
                    <div className="Inner">
                        <form className="form">
                            <label for ="inputemail" className="label">Email address</label>
                            <input 
                                type="text"
                                name ="email" 
                                className="input"
                                onChange ={onChange}
                                value={email}
                                 required autofocus />
                            <label for ="inputpassword" className="label">Password</label>
                            <input 
                                type="text"
                                className="input"
                                name="password"
                                onChange ={onChange}
                                value={password}
                                 />
                            
                        </form>
                        <AnotherBlock>
                            <div className="line"></div>
                            <div className="SignBtn" onClick={Sign}>
                                Sign in
                            </div>
                            <Link to ="/SignUp" style={{textDecoration:'none',color:'#333'}}>
                                <div className="SignUp">Sign Up</div>
                            </Link>
                        </AnotherBlock>
                        <HomeBlock>
                            <Link to="/" style={{textDecoration:'none',color:'#333'}}>
                                <MdKeyboardReturn className="Md" size="30">
                                </MdKeyboardReturn>
                            </Link>
                        </HomeBlock>
                    </div>
                </div>
            </SigninBlock>
        </>
    )
}
export default Signin
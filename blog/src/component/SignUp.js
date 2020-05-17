import React ,{useState} from 'react'
import axios from 'axios'
import styled ,{createGlobalStyle}from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from './Modal/Modal.js'
function SignUp() {
    const [input,SetInput] = useState({nickname:'',email:'',password:''})
    const [modal,SetModal] = useState(true)
    const {name ,email,password } = input
    const onChange = e => {
        const {value,name} = e.target
        SetInput({
            ...input,
            [name]:value
        })

    }
    const onSubmit = e => {
        e.preventDefault()
    }
    const Sign = () => {
        axios.post('http://localhost:5000/Sign',{
            name,
            email,
            password
        }).then(res=> {
                console.log(res)
                if(res.data==='Success') {  
                    SetModal(!modal) 
                }
                else {
                    alert('입력칸에 기입해주시기 바랍니다')
                }
            })
            .catch(e=>console.log(e.response))
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
        box-shadow:0 0 8px rgba(0,0,0,0.04);
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
                    .btn {
                        margin-top:10px;
                        outline:none;
                        background:#eee;
                        font-size:18px;
                        border-radius:4px;
                        cursor:pointer;
                        
                    }
                    .btn2 {
                        text-align:center;
                        padding:1px 6px;
                        box-shadow:1px 2px 8px rgba(0,0,0,0.34);
                        color:black;
                        font-weight:420;
                    }
                }
            }
        }
    `
    if (modal) {
        return (

            <>
                <GlobalStyle></GlobalStyle>
                <SigninBlock>
                    <div className="Header">
                        <h1 className="h1">Sign Up</h1>
                        <span className="text">회원가입</span>
                    </div>
                    <div className="Section">
                        <div className="Inner">
                            <form className="form" onSubmit={onSubmit}>
                                <label for ="inputemail" className="label">name{name}</label>
                                <input 
                                    name ="name" 
                                    className="input"
                                    onChange ={onChange}
                                    value={name}
                                    placeholder="name"
                                    required autofocus />
                                <label for ="inputemail" className="label">Email address {email}</label>
                                <input 
                                    name ="email" 
                                    className="input"
                                    onChange ={onChange}
                                    value={email}
                                    placeholder="email"
                                    required
                                    />
                                <label for ="inputpassword" className="label">Password {password}</label>
                                <input 
                                    className="input"
                                    name="password"
                                    onChange ={onChange}
                                    value={password}
                                    placeholder="password"
                                    required
                                />
                                <button type="button" className="btn" onClick={Sign}>Sign Up</button>
                                <Link to ="/Home" style={{textDecoration:'none',color:'#333'}}>
                                    <div className="btn btn2">Home</div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </SigninBlock>
            </>
        )
    } else {
        return (
            <Modal />
        )
    }

}
export default SignUp
import React ,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import HomeBtn from './Icon/HomeBtn'
import Header from './Header.js'
const fetchURLADD = 'http://localhost:5000/AddPost'
function AddPost() {
    const [input,SetInput] = useState({title:'',body:''})
    const {title,body} = input

  

    const onChange =(e) => {
        const {name,value} = e.target
        SetInput({
            ...input,
            [name]:value
        })
    }
    

    const addPost = () =>  {
        axios.post(fetchURLADD,{
            title,
            body
        }).then(res => {
            console.log(res)
            if(res.data==='Success') {
                window.location.assign('http://localhost:3000')
            }else {
                alert('입력칸에 기입해주시기 바랍니다.')
            }
        }).catch(e => {
            console.log(e.response)
        })
    }

    

    const AddBlock = styled.div`
        position:relative;
        background:white;
        width:512px;
        height:768px;
        border-radius:16px;
        box-shadow:1px 1px 4px 4px #333;
        margin:0 auto;
        margin-top:48px;
        margin-bottom:32px;
        display:flex;
        align-items:center;
        flex-direction:column;
        border:2px solid lightgray;
        font-family:NeoDunggeunmo;
        @media(max-width:400px) {
            width:256px;
            height:512px;
        }
        .HeaderBlock {
            font-size:24px;
        }
        .FormBlock {
            margin-top:16px;
            .form {
                display:flex;
                width:496px;
                flex-direction:column;
                @media(max-width:400px){
                    width:248px;
                }
                
            }
            .input {
                margin-bottom:16px;
                height:24px;
                border:1px solid lightgray;
                border-radius:2px;
            
            }
            .textarea {
                margin-bottom:16px;
                height:396px;
                @media(max-width:400px) {
                    height:198px;
                }
                box-sizing:border-box;
                border:1px soild lightgray;
                border-radius:4px;
            }
            .btn {
                margin: 0 auto;
                width:496px;
                font-family:NeoDunggeunmo;
                @media(max-width:400px) {
                    width:248px;

                }
                outline:none;
                background:#4c9e5f;
                font-size:24px;
                border-radius:2px;
                cursor:pointer;
                &:hover {
                    background:#5440ed;
                }
            }
        }
        
    
    `
    return (
        <>
            <Header />
            <AddBlock>
                <div className="HeaderBlock">
                    <h2 className="h2">글쓰기</h2>
                </div>
                <div className="FormBlock">
                    <form className="form">
                        <input className="input" type="text" name="title"  value ={title} onChange ={(e)=>onChange(e)} required placeholder="제목을 입력하세요"/>
                        <textarea className="textarea" name="body" type="textarea" value={body} onChange={(e)=>onChange(e)} maxLength="140" rows="7" placeholder="내용을 입력하세요"></textarea>
                        <button className="btn" type="button" name="submit" onClick={addPost}>Add Post</button>
                    </form>
                </div>
                <HomeBtn />
            </AddBlock>
        </>
    )
}
export default AddPost
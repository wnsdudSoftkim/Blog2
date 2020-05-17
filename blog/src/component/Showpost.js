import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ListIcon from './Icon/ListIcon.js'
// 페이징 로직 참조 https://medium.com/@han7096/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-eb4f0f4a1da0
// 페이징 나중에 구현
const fetchURL = "http://localhost:5000/getPost"

function ShowPost() {
    const [items,SetItems] = useState()
    const [count,SetCount] = useState({
        start:0,
        end:8
    })
    const [target,SetTarget] = useState()
    const {page,start,end} = count

    useEffect(() => {
        axios.post(fetchURL).then(res=> {
                console.log(res)
                console.log(res.data.length)
                SetItems(res.data)
                SetTarget(res.data.slice(start,end))
            })
    },[])
    let key = null
    const ChangeIndexUp = () => {
        SetCount({
            end:end+8
        })
        SetTarget(items.slice(start,end))
        
        key = <div>{<ShowPost />}</div>
    }
    const ShowPostBlock = styled.div`
        width:100%;
        display:flex;
        flex-direction:column;
        .Header {
            display:flex;
            flex-direction:column;
            padding:30px 15px 30px;
            border-bottom:1px solid #ebebeb;
            margin-left:10px;
            cursor:pointer;
            @media(max-width:767px) {
                min-height:100px;
            }
            .title {
                font-size:18px;
                color:#080808;
                margin:8px 0px;
                font-weight:700;
                &:hover {
                    text-decoration:underline;
                }
            }
            .body {
                font-size:15px;
                color:#666666;
                overflow:hidden;
                lien-height:1.6;
            }
        }
        
    `
    return (
        <>
            <ShowPostBlock>
                {items
                ? items.map(item => {
                    return (
                        <div key={item.id}>
                            <Link to={`/PostPage/${item._id}`} style={{textDecoration:'none',color:'none'}}>
                                <div className="Header" >
                                    <span className="title">
                                        {item.title}
                                        {item._id}
                                    </span>
                                    <span className="body">{item.body}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })
                : "Loading"
                }
            </ShowPostBlock>
            <ListIcon  onClick ={ChangeIndexUp} />
            {key}
        </>
        
    )
}
export default ShowPost
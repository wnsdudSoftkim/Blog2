import React,{useState} from 'react'
import styled from 'styled-components'
import img from '../image/user.png'
import IntroduceInfo from './IntroduceInfo'
import {MdKeyboardReturn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import Header from '../Header.js'
function Introduce() {
	 const [activeTab, setActiveTab] = useState(1);
	 
	const toggle =tab => {
		if(tab !== activeTab)  {
			setActiveTab(tab)
		}
	}
	
	const IntroBlock = styled.div`
		width:100%;
		position:relative;
		font-family: 'Noto Sans KR', sans-serif;

	`
	const SectionBlock = styled.div `
		position:relative;
		width:700px;
		margin:0 auto;
		@media(max-width:768px) {
			width:500px;
		}
		@media(max-width:500px) {
			width:300px;
		}

	`
	const IntroHeaderBlock = styled.div`
		width:100%;
		margin-top:48px;
		.H1 {
			display:block;
			font-size:28px;
			line-height:34px;
			color:#333;
			font-weight:400;
		}
		.SubH1 {
			display:block;
			font-size:13px;
			color:#959595;

		}
		.GrayText {
			font-size:13px;
			color:#959595;
		}
		.visitor {
			margin-top:15px;
		}
		.textnumber {
			font-size:18px;
			color:#959595;
		}
		.Md {
			position:relative;
			left:-10px;
		}
	`
	const TumbBlock = styled.div`
		position:absolute;
		right:0%;
		width:160px;
		height:160px;
		border-radius:50%;
		display:flex;
		align-items:center;
		justify-content:center;

	`
	const ButtonBlock = styled.div`
		right:0%;
		top:10%;
		height:20px;
		border-radius:16px;
		display:flex;
		align-items:center;
		justify-content:center;
		font-family:NeoDunggeunmo;
		border:1px solid lightgray;
		font-size:18px;
		cursor:pointer;
		background:#4c9e5f;
		&:hover {
			background:#5440ed;
		}
	`
	const IntroBottomBlock=styled.div`
		margin-top:94px;
		border-top:1px solid #eee;
		position:absolute;
		width:100%;
		.BottomUl {
			display:flex;
		}
		.BottomLi {
			width:33.33%;
			display: block;
			height: 24px;
			margin-top: -1px;
			padding:0;
			font-size: 16px;
			text-align: center;
			cursor:pointer;
			margin-right:10px;
			
		}
		.BottomLi1 {
			
		}
		.BottomLi2 {
			
		}
		.BottomLi3 {
			
		}
		.a {
			color:#959595;
			text-decoration:none;
			font-size:16px;

		}
	`
	const MainBlock = styled.div`
		position:absolute;
		width:100%
	`


	return (
		<>
			<Header />
			<IntroBlock>
				<SectionBlock>
					<IntroHeaderBlock>
						<Link to="/" style={{textDecoration:'none',color:'#333'}}>
							<MdKeyboardReturn className="Md" size="30">
							</MdKeyboardReturn>
						</Link>
						<TumbBlock>
							<img src={img} alt='aa' size="80" />
						</TumbBlock>
						<strong className="H1">김준영</strong>
						<span className="SubH1 GrayText">초보개발자</span>
						<div className="visitor">
							<p className="GrayText">오늘의 방문자</p>
							<p className="textnumber">1000명</p>
						</div>
						<ButtonBlock onClick={()=> {
							window.location.assign('http://localhost:3000')
						}}>
							최신글 보러가기
						</ButtonBlock>
					</IntroHeaderBlock>
					<IntroBottomBlock>
						<ul className="BottomUl">
							<li className="BottomLi BottomLi1" onClick={()=>toggle(1)}>
								<a className="a" href="#info" onClick={()=>toggle(1)}>소개</a>
							</li>
							<li className="BottomLi BottomLi2" onClick={()=>toggle(2)}>
								<a className="a"  href="#article" onClick={()=>toggle(2)}>글</a>
							</li>
							<li className="BottomLi BottomLi3" onClick={()=>toggle(3)}>
								<a className="a"  href="#Pot" onClick={()=>toggle(3)}>포트폴리오</a>
							</li>
						</ul>
						<MainBlock>
							<IntroduceInfo activeTab ={activeTab}/>
						</MainBlock>
					</IntroBottomBlock>
				</SectionBlock>
			</IntroBlock>
		</>
		
	)
}
export default Introduce
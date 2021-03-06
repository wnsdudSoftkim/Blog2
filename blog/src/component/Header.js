import React,{useState} from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown,MdKeyboardArrowUp,MdDehaze} from "react-icons/md";
import {Link} from 'react-router-dom'
import Nav from './Nav.js'
function Header() {
	const [Toggle,SetToggle] = useState(false)
	const onToggle =() => {
		return (
			SetToggle(!Toggle)
		)
	}
	let Mdkey = null
	if(Toggle) {
		Mdkey = <div>{<MdKeyboardArrowDown size="30"></MdKeyboardArrowDown>}</div>

	}else {
		Mdkey =<div>{<MdKeyboardArrowUp size = "30"></MdKeyboardArrowUp>}</div>
	}
	const GoHome =() => {
		window.location.assign('https://stark-hamlet-20836.herokuapp.com/')
	}
	const HeaderBlock = styled.div`
        position:relative;
        width:100%;
        height:65px;
        background:white;
        display:flex;
        justify-content:space-between;
		align-items:center;
		cursor:pointer;
		font-family:NeoDunggeunmo;
        @media(max-width:768px) {
            display:none;
        }

	`
	const LeftMenu = styled.div`
		display:flex;
		align-items:center;
		justify-content:center;
		.Left {
			margin-right:20px;
		}
		.Left1 {
			margin-left:20px;
		}
		.Left2 {
			width:70px;
			display:flex;
			justify-content:center;
			align-items:center;
			flex-direction:row;
			cursor:pointer;
		}
		.MenuText {
			font-size:20px;
			color:#1a1a1a;
			font-weight:bold;
		}
		.LoGo {
			margin-top:5px;
		}
	`
	const RightMenu = styled.div`
		display:flex;
		align-items:center;
		justify-content:center;
		.MenuText {
			font-size:18px;
			color:#1a1a1a;
			font-weight:bold;
		}
		.Right {
			margin-right:10px;

		}		
	`
	const MediaBlock = styled.div`
		display:none;
		@media(max-width:768px) {
			display:flex;
			position:relative;
			justify-content:flex-start;
			align-items:center;
			background:white;
			height:56px;
			cursor:pointer;
			font-family:NeoDunggeunmo;
		}
		@media(max-width:400px) {
			width:384px;
		}
		.Logo {
			cursor:pointer;
			margin-left:20px;
			margin-right:10px;
		}
		.Title {
			margin: 0 auto;
			
		}
		.TitleText {
			font-size:24px;
			font-weight:bold;
		}
	`
	return(
		<>
			<HeaderBlock>
				<LeftMenu>
					<div className="Left Left1 MenuText" onClick={GoHome}>Jun</div>
					<div className="Left Left2" onClick={onToggle}>
						<div className="MenuText">Home</div>
						<div className="LoGo">
							{Mdkey}
						</div>
					</div>
				</LeftMenu>
				<RightMenu>
					<div className="Right Right1">
						<Link to="/" style={{textDecoration:'none'}}><p className="MenuText">홈</p></Link>
					</div>
					<div className="Right Right2">
						<Link to="/introduce" style={{textDecoration:'none'}}><p className="MenuText">소개</p></Link>
					</div>
					<div className="Right Right3 MenuText">포트폴리오</div>
					<div className="Right Right4 MenuText">방명록</div>
					<div className="Right Right5 MenuText">
						<Link to =  "/Signin" style={{textDecoration:'none'}}><p className="MenuText">관리자</p></Link>
					</div>
					<div classNAme="Right Right6 Logo">
					</div>
				</RightMenu>
			</HeaderBlock>
			<MediaBlock>
					<div className="Logo" onClick={onToggle}>
						<MdDehaze size="40" color="#1a1a1a" />
					</div>
					<div className="Title">
						<p className="TitleText"onClick={GoHome}>Jun's Blog</p>
					</div>
				</MediaBlock>
			<Nav  Toggle={Toggle}/>
		</>
	)
}
export default Header
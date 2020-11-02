import React from 'react'
import styled from 'styled-components'
function IntroduceInfo({activeTab}) {
	const InfoBlock = styled.div`
		display:block
		position:absolute;
		width:100%;
		font-family: 'Noto Sans KR', sans-serif;
		color:#959595;
		&:active
		.span {
			font-size:13px;
		}
		.p {
			font-size:13px;
		}
		.ul{
			display:flex;
			margin:0;
			padding:0;
			.li {
				display:flex;
				width:16px;
				height:16px;
				border-radius:6px;
				border:1px solid #959595;
				justyfy-content:center;
				font-size:10px;
				padding:10px;
			}

		}
	`
	const ArticleBlock= styled.div`
		display:block;
		position:absolute;
		width:100%;
		font-family: 'Noto Sans KR', sans-serif;
		color:#959595;

	`
	const PotBlock = styled.div`
		display:block;
		position:absolute;
		width:100%;
		font-family: 'Noto Sans KR', sans-serif;
		color:#959595;
	`
	if(activeTab===1) {
		return (
			<InfoBlock>
				<span className="span">소개</span>
				<p className="p">React 사용하는 초보 개발자 입니다.</p>
				<ul className="ul">
					<li className="li">React</li>
					<li className="li">React</li>
					<li className="li">React</li>
				</ul>
			</InfoBlock>
		)
		
	}else if (activeTab===2) {
		return (
			<ArticleBlock >
				<div className="Article">글 작성</div>
			</ArticleBlock>
		)
	}else {
		return (
			<PotBlock >
				<div className="Pot">포트폴리오</div>
			</PotBlock>
		)
	}
}
export default IntroduceInfo
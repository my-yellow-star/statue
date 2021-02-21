import styled from 'styled-components';
import '../style/anim.css'
import {Text, Title, Wrapper} from '../style'

const SloganWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SloganEdge = styled.div`
	width: 60vw;
  border: 1px solid yellow;
  padding: 10px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 5vh;
`

const Slogan = styled.div`
	display: flex;
`

const Indicator = styled.p`
	width: 100%;
	text-align: center;
	font-family: "Gmarket Sans";
	font-size: 24px;
	color: yellow;
	font-weight: lighter;
`

function Intro() {
	return (
		<div style={{position: "relative", height: '100vh', overflow: 'hidden'}}>
			<video muted autoPlay loop>
				<source src='climb.mp4' type='video/mp4'/>
				<strong>Your browser does not support the video tag.</strong>
			</video>
			<div style={{position: "absolute", top: '0', background: 'rgba(0,0,0,0.7)'}}>
			<Wrapper>
				<Title space='5px' caption>Portfolio</Title>
				<SloganWrapper>
					<SloganEdge>
						<Slogan>
							<Text>저는&nbsp;</Text>
							<Title anim opacity='0' weight='bold'>성장을 갈구하며, 성장통을 즐기는 개발자</Title>
							<Text>&nbsp;입니다.</Text>
						</Slogan>
					</SloganEdge>
				</SloganWrapper>
				<Indicator>More</Indicator>
			</Wrapper>
				</div>
		</div>
	)
}

export default Intro
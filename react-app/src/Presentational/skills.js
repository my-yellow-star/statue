import { Title, Text, Wrapper } from "../style";
import styled from 'styled-components';

const Background = styled.div`
  background: #171752;
`

const Window = styled.div`
	flex: 1 1 auto;
	display: flex;
	padding: 8vh 0;
`

const SkillText = styled(Text)`
	font-size: 24px;
	font-weight: lighter;
`

const SkillCaption = styled(Text)`
	font-size: 12px;
	line-height: 18px;
	height: 20px;
	padding: 2px 8px;
	margin: 0;
	color: darkblue;
	border-radius: 20px;
	background: yellow;
`

const SkillWindow = styled.div`
	flex: 1;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const SkillSet = styled.div`
	flex: 1 1 auto;
	border: 1px solid white;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 20px 10%;
	box-sizing: border-box;
`

function Skills() {
	return (
		<Background>
			<Wrapper>
				<Title caption space='5px'>Skills</Title>
				<Window>
					<SkillWindow>
						<Title>업무에도 활용해요</Title>
						<SkillSet>
							<SkillText>Pure Python</SkillText>
							<SkillText>html / css</SkillText>
							<SkillItem lang='python' skill='Flask'/>
							<SkillItem lang='python' skill='OpenCV'/>
							<SkillItem lang='javascript' skill='React'/>
							<SkillItem lang='cloud' skill='GCP'/>
							<SkillItem lang='vcs' skill='Git'/>
						</SkillSet>
					</SkillWindow>
					<SkillWindow>
						<Title>어느정도 활용해요</Title>
						<SkillSet>
							<SkillItem lang='java' skill='Android'/>
							<SkillItem lang='python' skill='FastApi'/>
							<SkillItem lang='python' skill='Tensorflow'/>
							<SkillItem lang='python' skill='NLP'/>
							<SkillItem lang='cloud' skill='AWS'/>
							<SkillItem lang='database' skill='MySQL'/>
							<SkillText>Docker</SkillText>
						</SkillSet>
					</SkillWindow>
					<SkillWindow>
						<Title>활용 경험이 있어요</Title>
						<SkillSet>
							<SkillItem lang='C++' skill='OpenCV'/>
							<SkillItem lang='python' skill='Dlib'/>
							<SkillItem lang='kotlin' skill='Android'/>
							<SkillItem lang='python' skill='Django'/>
							<SkillItem lang='java' skill='Spring'/>
							<SkillItem lang='javascript' skill='React Native'/>
							<SkillItem lang='blueprint' skill='Unreal Engine'/>
						</SkillSet>
					</SkillWindow>
					<SkillWindow>
						<Title>관심이 있어요</Title>
						<SkillSet>
							<SkillText>테스트 주도 개발 !</SkillText>
							<SkillText>대규모 소프트웨어 설계</SkillText>
							<SkillText>Kafka / fluentd</SkillText>
							<SkillText>Elastic Search</SkillText>
							<SkillText>Spark</SkillText>
							<SkillText>Flutter</SkillText>
							<SkillText>Kubernetes</SkillText>
						</SkillSet>
					</SkillWindow>
				</Window>
			</Wrapper>
		</Background>
	)
}

function SkillItem(props) {
	return (
		<div style={{display: 'flex', width: '100%', gap: '20px', alignItems: 'center'}}>
			<SkillText>{props.skill}</SkillText>
			{props.lang ? <SkillCaption>{props.lang}</SkillCaption>:null}
		</div>
	)
}

export default Skills
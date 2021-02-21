import styled from 'styled-components';
import {Title, Wrapper} from '../style'

const Image = styled.img`
  height: 35vh;
  width: auto
`

const SchoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const InfoText = styled.p`
  padding: 0;
  font-size: ${(props) => props.size || '24px'};
  color: ${(props) => props.color || 'white'};
  margin: ${(props) => props.noMargin ? '12px 0' : '12px'};
  font-family: "Gmarket Sans";
  font-weight: ${(props) => props.weight || 'lighter'};
`

const School = styled.p`
  margin: 8px;
  padding: 4px;
  border: 1px solid ${props => props.color};
  border-radius: 20px;
  color: ${props => props.color};
  font-size: 18px;
  font-weight: normal;
	text-align: center;
	min-width: 80px;
`

const Horizontal = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40vw;
`

function AboutMe() {
	return (
		<div style={{background: 'black'}}>
			<Wrapper>
				<Title caption space='5px'>About Me</Title>
				<Image src='profile.svg'/>
				<SchoolWrapper>
				<InfoText weight='bolder' size='36px'>개발자 조찬아</InfoText>
					<br/>
					<Horizontal>
						<School color='grey'>고등</School>
						<InfoText>평택고등학교</InfoText>
						<InfoText color='grey'>문과</InfoText>
					</Horizontal>
					<Horizontal>
						<School color='yellow'>재수</School>
						<InfoText>안성종로기숙학원</InfoText>
						<InfoText color='yellow'>이과</InfoText>
					</Horizontal>
					<Horizontal>
						<School color='grey'>대학</School>
						<InfoText>육군사관학교</InfoText>
						<InfoText color='grey'>군인</InfoText>
					</Horizontal>
					<Horizontal>
						<School color='yellow'>대학</School>
						<InfoText>건국대학교</InfoText>
						<InfoText color='yellow'>컴공</InfoText>
					</Horizontal>
					<br/><br/><br/>
					<div style={{display: 'flex', }}>
						<InfoText>꿈이 없던 문과생에서 이공계로의 도전,</InfoText>
						<InfoText noMargin color='yellow'>개발자</InfoText>
						<InfoText>를 향한 또 한번의 도전</InfoText>
					</div>
				</SchoolWrapper>
			</Wrapper>
		</div>
	)
}

export default AboutMe
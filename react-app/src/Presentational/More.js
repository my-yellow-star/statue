import {Background, Link, Text, Title, Wrapper} from '../style'
import styled from "styled-components";

const LinkWrapper = styled.div`
  flex: 1 1 auto;
  border: 1px solid white;
  display: flex;
  justify-content: flex-end;
`

const InnerWrapper = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid yellow;
`

function More() {
	return (
		<Background background='intro.svg'>
			<Wrapper>
				<Title space='5px' caption>More</Title>
				<LinkWrapper>
					<InnerWrapper>
						<div>
							<Text weight='lighter'>많이 부족하지만</Text>
							<Text weight='lighter'>포기하지 않고</Text>
							<Text weight='lighter'>오늘도 한 발짝 성장을 향해 내딛는</Text>
							<Text>개발자 조찬아 입니다</Text>
						</div>
						<div>
							<Text weight='lighter' size='18px'>010-3478-4796</Text>
							<Text weight='lighter' size='18px'>jochana@kakao.com</Text>
							<div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '20%', paddingBottom: '10%'}}>
								<Text weight='lighter'><Link href='https://chana.tistory.com/' target='_blank' color='white'>블로그</Link></Text>
								<Text weight='lighter'><Link href='https://github.com/Jo-chana' target='_blank' color='white'>Git</Link></Text>
								<Text weight='lighter'><Link href='https://www.linkedin.com/in/chana-good/' target='_blank' color='white'>LinkedIn</Link></Text>
							</div>
						</div>
					</InnerWrapper>
				</LinkWrapper>
			</Wrapper>
		</Background>
	)
}

export default More

import { Title, Text, Wrapper } from "../style";
import styled from "styled-components";
import {useState} from "react";

const Background = styled.div`
  background: ${props => props.background || 'white'};
`

const LogoText = styled(Title)`
  color: ${props => props.color || 'black'};
`

const Window = styled.div`
  //border: 1px solid black;
  flex: 1 1 auto;
  display: flex;
  gap: 30px;
`

const ImageWrapper = styled.div`
  //border: 1px solid black;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const MainImageWrapper = styled.div`
  //border: 1px solid black;
  flex: 4;
	overflow: hidden;
`

const MainImage = styled.img`
  width: 100%;
  height: 100%;
	max-height: 60vh;
  object-fit: contain;
	overflow: hidden;
`

const Gallery = styled.div`
  //border: 1px solid black;
  flex: 1;
  display: flex;
	max-height: 20vh;
  gap: 20px;
`

const GalleryImageWrapper = styled.div`
  flex: 1;
  display: flex;
`

const ContentWrapper = styled.div`
  //border: 1px solid black;
  flex: 1.3;
  display: flex;
  flex-direction: column;
`

const InnerWrapper = styled.div`
  //border: 1px solid black;
  flex: ${props => props.flex };
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Inner = styled.div`
  flex: 1;
	//background: lightgrey;
	border: 1px solid grey;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 8px;
`

const InnerSentence = styled.div`
	flex: 1 1 auto;
	padding: 5px 10px;
	display: flex;
	align-items: center;
`

const DataWrapper = styled.div`
  //border: 1px solid black;
  flex: 0.7;
`

const Caption = styled(Title)`
  color: ${props => props.color || 'white'};
  background: ${props => props.bg || 'black'};
  border-radius: 20px;
  width: fit-content;
  font-size: 18px;
  padding: 10px 8px;
  display: inline;
	margin: 0;
	position: absolute;
	top: -5%;
	left: -10px;
`

function GalleryItem(props) {

	return (
		<GalleryImageWrapper>
			<img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
			     src={props.image} onClick={props.onClick} alt='project'/>
		</GalleryImageWrapper>
	)
}


function Project(props) {
	const data = props?.data || {image: ['rocket.svg', 'profile.svg', 'intro.svg']};
	const images = data?.image || [null];
	const [main, setMain] = useState(images[0]);
	return (
		<Background background={props.background}>
			<Wrapper>
				<LogoText caption space='5px'>{data.logo}</LogoText>
				<Window>
					<ImageWrapper>
						<MainImageWrapper>
							<MainImage src={main} alt='main'>
							</MainImage>
						</MainImageWrapper>
						<Gallery>
							{images.map((item, index) => (
								<GalleryItem key={index} image={item} onClick={() => setMain(item)}/>
							))}
						</Gallery>
					</ImageWrapper>
					<ContentWrapper>
						<InnerWrapper flex='0.7'>
							<LogoText weight='bolder'>{data?.title || 'Project Title'}</LogoText>
						</InnerWrapper>
						<InnerWrapper flex='4'>
							<Inner>
								<Caption>사용 기술</Caption><br/>
								<InnerSentence>
									<Text color='black' size='18px'>{data?.skill || '사용 기술'}</Text>
								</InnerSentence>
							</Inner>
							<Inner>
								<Caption>맡은 역할</Caption><br/>
								<InnerSentence>
									<Text color='black' size='18px'>{data?.role || '맡은 역할'}</Text>
								</InnerSentence>
							</Inner>
							<Inner>
								<Caption>댤성 사항</Caption><br/>
								<InnerSentence>
									<Text color='black' size='18px'>{data?.goal || '달성 사항'}</Text>
								</InnerSentence>
							</Inner>
							<Inner>
								<Caption>기타 사항</Caption><br/>
								<InnerSentence>
									<Text color='black' size='18px'>{data?.etc || '기타 사항'}</Text>
								</InnerSentence>
							</Inner>
						</InnerWrapper>
					</ContentWrapper>
					<DataWrapper>
						{data?.data}
					</DataWrapper>
				</Window>
			</Wrapper>
		</Background>
	)
}

export default Project
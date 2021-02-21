import styled, {keyframes} from 'styled-components'

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`

export const Background = styled.div`
  width: 100vw;
  height: auto;
  background: url(${(props) => props.background}) fixed;
  background-size: cover;
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 3vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const FadeInUp = keyframes`
	0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
`

export const Title = styled.p`
  font-size: ${(props) => props.caption ? '18px' : '30px'};
  font-family: "Gmarket Sans";
  color: yellow;
	opacity: ${(props) => props.opacity || 1};
  font-weight: ${(props) => props.weight || 'medium'};
	animation: ${(props) => props.anim ? FadeInUp : ''};
	animation-duration: 2s;
	animation-fill-mode: forwards;
	animation-delay: 1s;
	letter-spacing: ${(props) => props.space || ''};
`

export const Text = styled.p`
	font-size: ${(props) => props.size || '30px'};
	font-family: "Gmarket Sans";
	color: ${props => props.color || 'white'};
	font-weight: ${(props) => props.weight || 'medium'};
	line-height: 120%;
`

export const T = styled.p`
	font-family: "Gmarket Sans";
	font-size: ${props => props.big? '24px' : '18px'};
	font-weight: ${props => props.bold? 'bolder' : ''};
`

export const Link = styled.a`
	text-decoration: None;
	color: ${props => props.color || 'darkblue'};
	&:visited {
		text-decoration: None;
	}
`
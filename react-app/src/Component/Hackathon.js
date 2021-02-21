import Project from "../Presentational/Project";
import {T, Link} from '../style'

function Hackathon() {
	const title = '챗봇 기반 교양 강의 추천 서비스';
	const skill = <>Danbee.ai (chatbot)<br/>Flask (server)<br/>Python (Algorithm)<br/>React (front-end)</>;
	const role = <>Danbee.ai 플랫폼을 활용한 챗봇 모델 제작 및 api 구성<br/>사용자 맞춤형 시간표 조합 알고리즘 작성 및 배포</>;
	const goal = <>사용자 친화적 경험을 위한 챗봇 말투 및 추론 실패 / 의도 확인 케이스 대응<br/>dynamic programming 활용한 시간표 조합 알고리즘 작성 및 Rest api 구성</>;
	const etc = <>2021 건국대학교 ai 해커톤 우수상</>;
	const images = ['hackathon/hack1.png', 'hackathon/hack2.png'];

	const data = {
		title: title,
		skill: skill,
		image: images,
		role: role,
		goal: goal,
		etc: etc,
		data: Info(),
		logo: 'Team Project : 교양 뭐 듣지? (21.2.15 ~ 21.2.19)',
	};

	return (
		<Project data={data} background='#E8FFD6'/>
	)
}

function Info() {
	return (
		<div style={{width: '100%', height: '100%', background: 'white', borderRadius: '10px'}}>
			<div style={{width: '100%', height: '100%', padding: '50px 20px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
				<T bold big>Detail</T>
				<T bold><Link href='https://www.notion.so/10-0b478d6672174f99bfeba95e26a1e680' target='_blank'>개발일지 바로가기</Link></T>
				<T bold><Link href='https://github.com/Jo-chana/Course_RecSys_Chatbot' target='_blank'>Git Repository</Link></T>
			</div>
		</div>
	)
}

export default Hackathon
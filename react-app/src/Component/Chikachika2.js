import Project from "../Presentational/Project";
import {T, Link} from '../style'

function Chikachika2() {

	const title = 'Ai 기반 치과 헬스케어 서비스 - Website';
	const skill = <>Flask (web server)<br/>React (web front-end)<br/>Cloud Run (deploy)<br/>Docker</>;
	const role = <>치아 AI 모델 배포용 웹서비스 구축</>;
	const goal = <>tflite 포맷을 선택하여 배포용 ai 모델 경량화<br/>gunicorn 을 활용하여 서버의 병렬 처리 가용성 보안<br/>
	컨테이너형 Severless 기반 배포 방식으로 비용 절감 및 트래픽 유연성 확보<br/>Cloud Build 기반 CI 구축 배포 자동화</>;
	const etc = <>2020 차세대융합기술연구원 창업지원 사업 1위<br/>(2000만원 및 연구실 지원)<br/>2021 KVP 5기 장려상</>;
	const images = ['chika2/chika1.svg', 'chika2/chika2.svg', 'chika2/chika3.png'];

	const data = {
		title: title,
		skill: skill,
		image: images,
		role: role,
		goal: goal,
		etc: etc,
		data: Info(),
		logo: 'Personal Project : Chika chika (20.9 ~ 21.2)',
	};

	return (
		<Project background='#D1F4FF' data={data}/>
	)
}

function Info() {
	return (
		<div style={{width: '100%', height: '100%', background: 'white', borderRadius: '10px'}}>
			<div style={{width: '100%', height: '100%', padding: '50px 20px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
				<T bold big>Detail</T>
				<T bold><Link target='_black' href='https://chikalab-h2rvr25sca-du.a.run.app/'>사이트 바로가기</Link></T>
				<T bold><Link target='_black' href='https://www.notion.so/Chika-Lab-Util-codes-0159871529f149608e848d2ebb029c37'>
					Publicly available Codes
				</Link></T>
			</div>
		</div>
	)
}

export default Chikachika2
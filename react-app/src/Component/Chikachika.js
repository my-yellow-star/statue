import Project from "../Presentational/Project";

function Chikachika() {

	const title = 'Ai 기반 치과 헬스케어 서비스 - Ai 모델';
	const skill = <>Tensorflow (VGG16, ResNet)<br/>OpenCV (Image Processing)<br/>Dlib (Face Recognition)<br/>Google Vision API (autoML)</>;
	const role = <>얼굴 이미지 기반 구강 및 치아 영역 인식 모델 작성<br/>영상처리를 통한 치아 영역 분리 및 health metric 도출<br/>가상 미백 시뮬레이션 프로그램 작성</>;
	const goal = <>기존에는 없던 사용자 기반의 치과 ai 모델 작성<br/>치아가 아닌 사진에 대한 예외 처리 기능을 부여하여 사용자 경험 증대<br/></>;
	const etc = <>2020 차세대융합기술연구원 창업지원 사업 1위<br/>(2000만원 및 연구실 지원)<br/>2021 KVP 5기 장려상</>;
	const images = ['chika/chika1.png', 'chika/chika2.png', 'chika/chika3.png'];

	const data = {
		title: title,
		skill: skill,
		image: images,
		role: role,
		goal: goal,
		etc: etc,
		data: null,
		logo: 'Personal Project : Chika chika (20.9 ~ 21.2)',
	};

	return (
		<Project background='#D1F4FF' data={data}/>
	)
}

export default Chikachika
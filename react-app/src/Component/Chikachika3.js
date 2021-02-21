import Project from "../Presentational/Project";

function Chikachika3() {

	const title = '이미지 레이블링 admin site 제작';
	const skill = <>React (front-end)<br/>AWS S3 (storage)</>;
	const role = <>팀 내 치과의사가 레이블링 할 admin tool 제작</>;
	const goal = <>ai 배포 웹사이트를 통해 얻은 이미지 데이터를 불러오는 파이프라인 구축<br/>필요에 맞는 레이블 커스텀 기능 제작<br/>레이블링 된 결과 데이터베이스 저장</>;
	const etc = <>Component 계층화를 통한 효율적인 데이터 전달 구조를 디자인하기 위해 노력하였으며, react hook 을 적극적으로 활용하여
	상태 관리를 효과적으로 하고자 하였습니다.</>;
	const images = ['chika3/chika1.png', 'chika3/chika2.jpeg'];

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

export default Chikachika3
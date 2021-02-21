import Project from "../Presentational/Project";

// data
// image (array(url))
// private
// title, skill, role, goal, etc
// data (reference)

function Hankki() {
	const title = '1인 가구를 위한 식자재 공유 플랫폼';
	const skill = <>Android Studio - Java<br/>AWS EC2 S3<br/>Kakao Map api<br/>Google Firebase</>;
	const role = <>전반적인 어플리케이션의 프론트엔드 개발<br/>okhttp, retrofit을 활용한 서버와의 rest api 통신 모듈을 구현<br/>
		rxjava를 통한 비동기 프로세스를 처리<br/>aws s3와 glide를 활용 이미지 데이터 처리 및 저장<br/>google Map을 이용해 위치 기반
		필터링/클러스터링을 구현</>;
	const goal = <>위 프로젝트를 통해 협업에 대해 가장 많이 배울 수 있었습니다. 하나의 프로젝트를 여러 명이서 개발하는 만큼, 다른 사람이
	나의 코드를 보고 이해하거나 필요 시 수정하기에 용이할 지 많이 고민을 했던 경험이었습니다. 또한 git branch merge 등 병합 및 배포 과정에서
	많은 시행 착오를 겪으면서 협업 시 코드 관리의 노하우에 대해서도 얻은 것이 많은 프로젝트였습니다.</>;
	const etc = <>2020 k-startup 위치기반 우수 비즈니스 모델 발굴 프로젝트 장려상<br/>
	2020 세종대학교 캠퍼스타운 지원사업 선정</>;
	const images = ['hankki/Hankki_1.jpeg', 'hankki/Hankki_2.png', 'hankki/Hankki_3.jpg'];
	const data = {
		title: title,
		skill: skill,
		image: images,
		data: Video(),
		role: role,
		goal: goal,
		etc: etc,
		logo: 'Team Project : Hankki (20.6 ~ 20.8)',
	};
	return (
		<Project data={data} background='antiquewhite'/>
	)
}

function Video() {
	return(
		<div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
			<video muted autoPlay loop controls='controls' style={{width: '100%', height: '100%'}}>
				<source src='hankki/hankki.mov' type='video/mp4'/>
				<strong>Your browser does not support the video tag.</strong>
			</video>
		</div>
	)
}


export default Hankki
import Project from "../Presentational/Project";
import {T, Link} from '../style'

function Footprint() {
	const title = '위치 기반 추억 기록 앱 발자취';
	const skill = <>Android Studio<br/>AWS S3 (storage)</>;
	const role = <>일상에서 쉽게 추억을 기록할 수 있는 어플리케이션 제작</>;
	const goal = <>사용자가 남긴 추억들을 한눈에 볼 수 있는 메인 페이지 구성<br/>
	각 게시글 마다 추억을 상기시키는 사진 업로드 기능<br/>추후 게시글 편집 / 사진 추가 할 수 있는 기능</>;
	const etc = <>안드로이드 스튜디오에 익숙해지기 위해 개인적으로 진행했던 사이드 프로젝트입니다. google play store 에 데모버전을 출시하였고, 기회가 된다면
	회원가입 및 로그인 등의 기능과 장소 추천 기능을 추가하여 디벨롭 해보고 싶은 프로젝트입니다.</>;
	const images = ['footprint/foot1.png', "footprint/foot2.png", "footprint/foot3.png"];

	const data = {
		title: title,
		skill: skill,
		image: images,
		role: role,
		goal: goal,
		etc: etc,
		data: Info(),
		logo: 'Personal Project : 발자취 (20.8)',
	};

	return (
		<Project data={data} background='#FFE2D1'/>
	)
}

function Info() {
	return (
		<div style={{width: '100%', height: '100%', background: 'white', borderRadius: '10px'}}>
			<div style={{width: '100%', height: '100%', padding: '50px 20px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
				<T bold big>Detail</T>
				<T bold><Link href='https://www.youtube.com/watch?v=m-h2F6aQGJ4' target='_blank'>시연영상 바로가기</Link></T>
				<T bold><Link href='https://github.com/Jo-chana/footprint-v2' target='_blank'>Git Repository</Link></T>
			</div>
		</div>
	)
}

export default Footprint
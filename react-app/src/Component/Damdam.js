import Project from "../Presentational/Project";
import {T} from '../style'

function Damdam() {
	const title = 'Ai 기반 맞춤형 리뷰 추천 플랫폼';
	const skill = <>Tensorflow (GRU, LSTM)<br/>Okt, Nltk (Tokenizing)<br/>Glove (Embedding)<br/>Selenium (Crawling)</>;
	const role = <>온라인 커머스 리뷰 크롤링 및 데이터 구축<br/>자연어 처리를 통한 키워드 별 metric 추출 함수 작성<br/>키워드 별 리뷰 만족도 예측 딥러닝 모델 구축</>;
	const goal = <>단순한 감정 분석 및 긍부정 평가가 아닌, 사용자의 입장에서 여러 가지 측면에서 상품의 장/단점을 알려줄 수 있는 ai 모델을 구현한 점이 의미있었다고 생각합니다.
	키워드 모델링 알고리즘을 짜면서 여러 가지 형태소 분석기들을 테스트 하고, 각 라이브러리의 장단점을 파악하며 상황에 맞는 도구를 선택할 수 있는 인사이트를 얻게 되었습니다.</>;
	const etc = <>2020 KVP 4기 창업경진대회 최우수상</>;
	const images = ['damdam/damdam1.png', 'damdam/damdam2.png', 'damdam/damdam3.png'];

	const data = {
		title: title,
		skill: skill,
		image: images,
		role: role,
		goal: goal,
		etc: etc,
		data: Info(),
		logo: 'Team Project : Damdam (20.8 ~ 20.9)',
	};

	return (
		<Project data={data} background='#D4C9FF'/>
	)
}

function Info() {
	return (
		<div style={{width: '100%', height: '100%', background: 'white', borderRadius: '10px'}}>
			<div style={{width: '100%', height: '100%', padding: '50px 20px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
				<T bold big>Detail</T>
				<T>리뷰 수집 : 20만 건</T>
				<T>별점 예측 모델 정확도 : 97%</T>
				<T>모델링 키워드 수 : 5</T>
				<T>키워드 별 모델 평균 정확도 : 87%</T>
				<T bold>기타사항</T>
				<T>정규표현식 및 tokenizer 활용한 데이터 전처리</T>
				<T>text2sequence, Embedding 정성 데이터 수치화</T>
				<T>모델 학습 시 조기 종료 및 checkpoint 활성화</T>
				<T>Glove 활용 유사 단어 생성 및 추출</T>
			</div>
		</div>
	)
}

export default Damdam
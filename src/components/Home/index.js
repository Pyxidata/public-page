import Loader from 'react-loaders'
import Page from './Page'
import Intro from '../Intro'
import './index.scss'
import Resume from '../../assets/documents/Resume.pdf'
import AboutAndContact from './AboutAndContact'

const Home = () => {

  return (
    <>
      {/* <motion.div
        initial={{ position: 'fixed', width: '100vw', height: '100vh' }}>
          <div className="container home-page">
            <div className="bg"></div>
            <div className="bg bg2"></div>
          </div>
      </motion.div> */}

      <div className="container home-page">
        <Intro />
        
        <Page 
          titleEng="Programming"
          titleKor="프로그래밍"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={false}
          link="/public-page/dev"
          resumeLink={Resume}
        />

        <Page 
          titleEng="Art & Illustration"
          titleKor="일러스트레이션"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={window.innerWidth > 1200}
          link="https://www.pixiv.net/en/users/106382305"
        />

        <Page 
          titleEng="Reptile Breeding"
          titleKor="파충류 브리딩"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={false}
        />

        <AboutAndContact />

      </div>

      <Loader type="ball-clip-rotate-multiple" style={{ position: 'fixed' }} />

    </>
  )
}

export default Home

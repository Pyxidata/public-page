import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/icon192.png'
import Logo from './Logo'
import './index.scss'
import { motion } from 'framer-motion'
import Motto from './Motto'

const Intro = () => {
  const letterClass = "text-animate"
  const nameArray1 = ['e', 'v', 'i', 'n.']
  const nameArray2 = ['a', 's', 'd', 'd', 'f', 'a', 's.']

  return (
    <div className="intro-page">
        <div className="page">

            <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #1a0c54', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '120vh solid #1a0c54', borderBottom: '90vh solid transparent' }}
            transition={{ delay: 1, duration: 0.5 }}
            />

            <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #130b33', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '108vh solid #130b33', borderBottom: '80vh solid transparent' }}
            transition={{ delay: 1.2, duration: 0.5 }}
            />

            <motion.div
            initial={{  position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #241d40', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '96vh solid #241d40', borderBottom: '70vh solid transparent' }}
            transition={{ delay: 1.4, duration: 0.5 }}
            />

            <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #0f101a', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '84vh solid #0f101a', borderBottom: '60vh solid transparent' }}
            transition={{ delay: 1.6, duration: 0.5 }}
            />

            <Logo />
            <div className="text-zone">
                <h1>
                    <span className='topHalf'>
                        <span className={`${letterClass} _0`}>H</span>
                        <span className={`${letterClass} _1`}>i,</span>
                        <br />
                        <span className={`${letterClass} _2`}>I</span>
                        <span className={`${letterClass} _3`}>'m</span>
                        <span className="smallIcon">
                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
                        </span>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray1}
                        idx={4}
                        />
                        <hr className='topLine' />
                    </span>
                </h1>

                <p>
                    <span className='middleTop'>
                        Programmer / Illustrator / Exotic Pet Breeder
                    </span>
                    <span className='middleBottom'>
                        개발자 / 일러스트레이터 / 브리더
                    </span>
                </p>
                
                <h1>
                    <span className="bottomHalf">
                        <hr className='bottomLine' />
                        <br />
                        <span className={`${letterClass} _0`}>안</span>
                        <span className={`${letterClass} _1`}>녕</span>
                        <span className={`${letterClass} _2`}>하</span>
                        <span className={`${letterClass} _3`}>세</span>
                        <span className={`${letterClass} _4`}>요,</span>
                        <br />
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray2}
                        idx={7}
                        />
                    </span>
                </h1>
            </div>
        </div>

        <Motto />
    </div>
    )
}

export default Intro
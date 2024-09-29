import './index.scss'
import { motion } from 'framer-motion'
import { PiMapPinArea, PiSuitcase, PiUser } from 'react-icons/pi'

const Motto = () => {

    const BackgroundEffect = () => (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.5 }}
                variants={{
                hidden: { position: 'absolute', width: 0, height: (window.innerWidth > 1200) ? 360 : '30vh', top: '30%', right: 0, background: '#130b33' },
                visible: { width: '100vw' }
            }}/>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                variants={{
                hidden: { position: 'absolute', width: 0, height: (window.innerWidth > 1200) ? 240 : '20vh', top: '30%', right: 0, background: '#1a0c54' },
                visible: { width: '100vw' }
            }}/>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                variants={{
                hidden: { position: 'absolute', width: 0, height: (window.innerWidth > 1200) ? 120 : '10vh', top: '30%', right: 0, background: '#241d40' },
                visible: { width: '100vw' }
            }}/>
        </div>
    )
    
    return (
        <div className="motto-page">
            <div className="page">

                <BackgroundEffect />
    
                <div className="text-zone">
                    <motion.h1
                        className="en"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                        visible: { color: '#7853ff', opacity: 1, filter: "blur(0px)", scale: 1 },
                        hidden: { color: '#fff', opacity: 0, filter: "blur(30px)", scale: 3 }
                    }}>
                        "asdf"
                    </motion.h1>
                    <motion.p
                        className='en'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        variants={{
                        visible: { color: '#a5cdd4', opacity: 1, y: 0 },
                        hidden: { color: '#fff', opacity: 0, y: 100 }
                    }}>
                        asdf asdf asd fasd fa sdf asdf asd f asdfasdf asdf asdf asdf asdf asdfasdfasd
                    </motion.p>


                    <motion.h1
                        className="kr"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1 }}
                        variants={{
                        visible: { color: '#7853ff', opacity: 1, filter: "blur(0px)", scale: 1 },
                        hidden: { color: '#fff', opacity: 0, filter: "blur(30px)", scale: 3 }
                    }}>
                        "asdf"
                    </motion.h1>
                    <motion.p
                        className='kr'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        variants={{
                        visible: { color: '#a5cdd4', opacity: 1, y: 0 },
                        hidden: { color: '#fff', opacity: 0, y: 50 }
                    }}>
                        ㅁㄴㅇ랴ㅐ ㅁ노디ㅑㄹ ㅗㅁ니ㅑ뎌ㅗㄹ ㅑㅕㅣㅁ농리ㅑㅕ 모냥ㄹ ㅚ먀농ㄹ ㅣㅕㅑㅁ녀도ㅑㅣ ㄹ
                    </motion.p>
                    
                </div>
            </div>
        </div>
    )
}

export default Motto
import './index.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { PiMapPinArea, PiSuitcase, PiUser } from 'react-icons/pi'

const AboutAndContact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_ap8zv7x', 'template_rrrfcrb', form.current, 'F7ujcoEz21XOrib99')
        .then(
            () => {
            alert('Email successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }

    const [showContent, setShowContent] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => setShowContent(window.innerWidth >= 1200);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Contact = () => (
        <div className={showContent ? "right" : "left"}>
            <motion.h1
                className="en"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                visible: { color: '#7853ff', opacity: 1, x: 0 },
                hidden: { color: '#fff', opacity: 0, x: showContent ? 100 : -100 }
            }}>
                Contact me
            </motion.h1>
            <motion.h1
                className="kr"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                variants={{
                visible: { color: '#7853ff', opacity: 1, x: 0 },
                hidden: { color: '#fff', opacity: 0, x: showContent ? 100 : -100 }
            }}>
                소통하기
            </motion.h1>

            <div className="contact">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        className="text"
                        placeholder="Name / 성함" 
                        type="text" 
                        name="from_name" 
                        required />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        placeholder="Email / 이메일"
                        type="email"
                        name="email"
                        required
                        />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        placeholder="Subject / 제목"
                        type="text"
                        name="subject"
                        required
                        />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <textarea 
                        placeholder="Message / 내용"
                        name="message"
                        required
                        ></textarea>
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input className="button" type="submit" value="SEND 전송" />
                    </motion.li>
                    </ul>
                </form>
            </div>
        </div>
    )
    
    return (
        <div className="about-page">
            <div className="page">

                {!showContent && (
                    <div>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                        hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '16%', right: '10%', background: '#241d40' },
                        visible: { scale: 1, rotate: '90deg' }
                        }}/>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            variants={{
                            hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '36%', right: '20%', background: '#1a0c54' },
                            visible: { scale: 1, rotate: '-90deg' }
                        }}/>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            variants={{
                            hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '26%', right: '30%', background: '#130b33' },
                            visible: { scale: 1, rotate: '90deg' }
                        }}/>
                    </div>
                )}
    
                <div className="left">
                    <motion.h1
                        className="en"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        visible: { color: '#7853ff', opacity: 1, x: 0 },
                        hidden: { color: '#fff', opacity: 0, x: -100 }
                    }}>
                        More about me
                    </motion.h1>
                    <motion.h1
                        className="kr"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                        visible: { color: '#7853ff', opacity: 1, x: 0 },
                        hidden: { color: '#fff', opacity: 0, x: -100 }
                    }}>
                        그 외의 정보
                    </motion.h1>

                    <ul>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiUser className="icon" />
                            <p className="text">
                                <span className="en">asdf</span>
                                <br />
                                <span className="kr">asdf</span>
                            </p>
                        </motion.li>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiMapPinArea className="icon" />
                            <p className="text">
                                <span className="en">asdf</span>
                                <br />
                                <span className="kr">asdf</span>
                            </p>
                        </motion.li>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiSuitcase className="icon" />
                            <p className="text">
                                <span className="en">asdf</span>
                                <br />
                                <span className="kr">asdf</span>
                            </p>
                        </motion.li>
                    </ul>
                
                    <br />
                    <motion.p
                        className='en'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        variants={{
                        visible: { color: '#a5cdd4', opacity: 1, y: 0 },
                        hidden: { color: '#fff', opacity: 0, y: 100 }
                    }}>
                        asdf asdf asd fasd fa sdf asdf asd f asdfasdf asdf asdf asdf asdf asdfasdfasd
                    </motion.p>
                    <br />
                    <motion.p
                        className='kr'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                        visible: { color: '#a5cdd4', opacity: 1, y: 0 },
                        hidden: { color: '#fff', opacity: 0, y: 100 }
                    }}>
                        ㅁㄴㅇ랴ㅐ ㅁ노디ㅑㄹ ㅗㅁ니ㅑ뎌ㅗㄹ ㅑㅕㅣㅁ농리ㅑㅕ 모냥ㄹ ㅚ먀농ㄹ ㅣㅕㅑㅁ녀도ㅑㅣ ㄹ
                    </motion.p>
                    
                </div>

                {showContent && (
                    <Contact />
                )}
            </div>

            {!showContent && (
                <div className="page">
                    <Contact />
                </div>
            )}
        </div>
    )
}

export default AboutAndContact
import './index.scss'
import Loader from 'react-loaders'
import './index.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Resume from '../../assets/documents/Resume.pdf'

const Dev = () => {

    window.scrollTo(0, 0);

    const [showContent, setShowContent] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => setShowContent(window.innerWidth >= 1200);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Projects = () => (
        <div className="project-zone">
            <motion.span 
                className="project"
                initial={{ rotateY: '180deg', opacity: 0, top: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}>
                
                Project 1
            </motion.span>
            <motion.span 
                className="project"
                initial={{ rotateY: '180deg', opacity: 0, bottom: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}>
                
                Project 2
            </motion.span>
        </div>
    )

    return (
        <>
            <div className="container dev-page">
                <div className="page">

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #1a0c54', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '240vh solid transparent', borderRight: '180vh solid #1a0c54' }}
                    transition={{ delay: 1, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #130b33', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '216vh solid transparent', borderRight: '160vh solid #130b33' }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #241d40', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '192vh solid transparent', borderRight: '140vh solid #241d40' }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #0f101a', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '168vh solid transparent', borderRight: '120vh solid #0f101a' }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                <div className="text-zone">
                    <motion.h1
                        className="en"
                        initial={{ color: '#fff', opacity: 0, x: -300 }}
                        animate={{ color: '#7853ff', opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}>
                        asdf
                    </motion.h1>
                    <motion.h1
                        className="kr"
                        initial={{ color: '#fff', opacity: 0, x: -300 }}
                        animate={{ color: '#7853ff', opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}>
                        asdf
                    </motion.h1>

                    <h2 className="techs">
                    <motion.a 
                        href={Resume} 
                        target = "_blank" 
                        rel="noreferrer" 
                        className="glow-on-hover"
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        >
                        asdf
                    </motion.a>
                    <br/>
                    <br/>
                        <motion.span
                            className="tech-item"
                            initial={{ color: '#fff', opacity: 0, x: -100 }}
                            animate={{ color: '#a5cdd4', opacity: 1, x: 20 }}
                            transition={{ delay: 1.7, duration: 0.5 }}>
                            {">> Kotlin / Java"}
                        </motion.span>
                        <br />
                        <motion.span
                            className="tech-item"
                            initial={{ color: '#fff', opacity: 0, x: -100 }}
                            animate={{ color: '#a5cdd4', opacity: 1, x: 40 }}
                            transition={{ delay: 1.8, duration: 0.5 }}>
                            {">> XML / Jetpack Compose"}
                        </motion.span>
                        <br />
                        <motion.span
                            className="tech-item"
                            initial={{ color: '#fff', opacity: 0, x: -100 }}
                            animate={{ color: '#a5cdd4', opacity: 1, x: 60 }}
                            transition={{ delay: 1.9, duration: 0.5 }}>
                            {">> Coroutines"}
                        </motion.span>
                        <br />
                        <motion.span
                            className="tech-item"
                            initial={{ color: '#fff', opacity: 0, x: -100 }}
                            animate={{ color: '#a5cdd4', opacity: 1, x: 80 }}
                            transition={{ delay: 2, duration: 0.5 }}>
                            {">> Firebase / Retrofit / Room Database"}
                        </motion.span>
                        <br />
                    </h2>
                    <p>
                        <motion.span 
                            className="experience"
                            initial={{ scale: 2, filter: 'blur(30px)', opacity: 0 }}
                            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}>

                            <motion.span
                                initial={{ position: 'relative', color: '#fff', fontSize: showContent ? 28 : 20, fontFamily: "Coolvetica", fontWeight: 400, top: 15, left: 10 }}
                                animate={{ color: '#7853ff' }}
                                transition={{ delay: 1.7, duration: 1 }}>
                                {"Experience"}
                            </motion.span>
                            <motion.span
                                initial={{ position: 'relative', color: '#fff', fontSize: showContent ? 22 : 16, fontFamily: "Coolvetica", fontWeight: 800, top: 15, left: 10 }}
                                animate={{ color: '#7853ff' }}
                                transition={{ delay: 1.7, duration: 1 }}>
                                {" / 학력 및 경력"}
                            </motion.span>

                            <br />
                            <br />
                            <ul>
                                <li>
                                    asdf
                                    <br />
                                    asdf
                                </li>
                                <br />
                                <li>
                                    asdf
                                    <br />
                                    asdf
                                </li>
                            </ul>

                        </motion.span>
                    </p>
                </div>
                {showContent && (
                    <Projects />
                )}
            </div>

            {!showContent && (
                <div className="page">
                    <Projects />
                </div>
            )}
        </div>

        <Loader type="ball-clip-rotate-multiple" style={{ position: 'fixed' }} />
    </>
    )
}

export default Dev
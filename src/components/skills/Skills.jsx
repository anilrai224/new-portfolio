import React from 'react'
import html from '../../assets/images/html.jpg'
import js from '../../assets/images/js.png'
import css from '../../assets/images/css.jpg'
import react from '../../assets/images/react.png'
import './skills.scss'
import {motion} from 'framer-motion'

const Skills = () => {
    const variants={
        initial:{
            x:-100,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.3,
            }
        }
    }
  return (
    <div className='skills'>
        <h1>Skills</h1>
        <motion.div className="container" initial='initial' whileInView='animate' variants={variants}>
            <motion.div className="skill" variants={variants}>
                <motion.div variants={variants} className="imgContainer">
                    <img src={html} alt="" />
                </motion.div>
                <motion.h2 variants={variants}>HTML</motion.h2>
                <motion.p variants={variants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi! Distinctio nemo doloremque quis, veritatis tempora.</motion.p>
            </motion.div>
            <motion.div className="skill" variants={variants}>
                <motion.div variants={variants} className="imgContainer">
                    <img src={css} alt="" />
                </motion.div>
                <motion.h2 variants={variants}>CSS</motion.h2>
                <motion.p variants={variants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi! Distinctio nemo doloremque quis, veritatis tempora.</motion.p>
            </motion.div>
            <motion.div className="skill" variants={variants}>
                <motion.div variants={variants} className="imgContainer">
                    <img src={js} alt="" />
                </motion.div>
                <motion.h2 variants={variants}>JavaScript</motion.h2>
                <motion.p variants={variants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi! Distinctio nemo doloremque quis, veritatis tempora.</motion.p>
            </motion.div>
            <motion.div className="skill" variants={variants}>
                <motion.div variants={variants} className="imgContainer">
                    <img src={react} alt="" />
                </motion.div>
                <motion.h2 variants={variants}>React-JS</motion.h2>
                <motion.p variants={variants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi! Distinctio nemo doloremque quis, veritatis tempora.</motion.p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills

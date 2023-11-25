import React from 'react'
import myImage from '../../assets/images/me.jpg'
import './about.scss'
import {motion} from 'framer-motion'

const About = () => {
    const variants={
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1.4,
                staggerChildren:0.3,
            }
        }
    }
    
  return (
    <div className='about'>
        <h1>About Me</h1>
        <motion.div className="container" variants={variants} initial='initial' whileInView='animate'>
            <motion.div className="imgContainer" variants={variants}>
                <img src={myImage} alt="Anil Rai" />
            </motion.div>
            <motion.div className="textContainer" variants={variants}>
                <motion.p variants={variants}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut culpa minima odio. Explicabo ad fugit aliquam veniam enim nemo, molestias sapiente commodi minima, dolorum ipsam ipsum, unde tempore necessitatibus neque!</motion.p>
                <motion.button>Contact Me</motion.button>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default About
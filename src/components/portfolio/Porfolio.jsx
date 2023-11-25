import React, { useRef } from 'react'
import './portfolio.scss'
import { motion,useScroll,useSpring } from 'framer-motion'

const items=[
    {
        id:1,
        image:'https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus1907/irfanfirdaus190700059/127453285-a-young-man-holding-smart-phone-hostel-search-looking-for-lodging-cheap-place-for-living-or-one.jpg',
        title:'Hostel Finder',
        desc:'HostelFinder: Your go-to app for quickly locating hostels in various cities. Find budget-friendly accommodation options, read reviews, and book your next adventure with ease using HostelFinder.',
        github:'https://github.com/anilrai224/hostelfinder',
    },
    {
        id:2,
        image:'https://previews.123rf.com/images/dolgachov/dolgachov1609/dolgachov160901639/62064250-business-people-technology-and-forecast-concept-close-up-of-woman-with-tablet-pc-computer-screen.jpg',
        title:'City Weather',
        desc:'CityWeather: A city-based weather checking app for instant weather updates.',
        github:'https://github.com/anilrai224/CityWeather',
    },
    {
        id:3,
        image:'https://previews.123rf.com/images/sarawuth702/sarawuth7021502/sarawuth702150200116/36848200-calculator-smartphone-on-table.jpg',
        title:'Calculator',
        desc:'A simple calculator website built using HTML,CSS and JavaScript',
        github:'https://github.com/anilrai224/calculator',
    },
    {
        id:4,
        image:'https://previews.123rf.com/images/kamchatka/kamchatka1705/kamchatka170500583/78273858-hiking-man-in-canadian-mountains-hike-is-the-popular-recreation-activity-in-north-america-there-are.jpg',
        title:'Sajilo Trek',
        desc:'A web based platfrom for making your hustle for searching treking destintaion more effective and efficent.',
        github:'https://github.com/anilrai224/treking'
    },
    {
        id:5,
        image:'https://previews.123rf.com/images/sorapop/sorapop2006/sorapop200600827/150329881-grocery-service-giving-fresh-vegetables-and-fruits-and-food-in-green-cloth-bag-and-wooden-basket-on.jpg',
        title:'Sajha Bajar',
        desc:'Sajha Bajar is your go to web based app for buying fresh grocerries directly form the farm of farmers.',
        github:'https://github.com/anilrai224/ecommerce',
    },
]

const Single = ({item})=>{
    const variants={
        initial:{
            x:-200,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
            }
        }
    }
    const textVariants={
        initial:{
            x:600,
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
    return <section className='project'>
        <motion.div className="container" initial='initial' whileInView='animate'>
            <motion.div  className="imgContainer">
                <motion.img variants={variants} src={item.image} alt="" />
            </motion.div>
            <motion.div variants={textVariants} className="textContainer">
                <motion.h2 variants={textVariants}>{item.title}</motion.h2>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.github} target='_blank'>Code</motion.a>
            </motion.div>
        </motion.div>
    </section>
}
 
const Porfolio = () => {
    const ref= useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"],
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className='portfolio' ref={ref} id="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/>
            ))}
    </div>
  )
}

export default Porfolio
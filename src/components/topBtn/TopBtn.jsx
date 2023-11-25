import React, { useEffect, useState } from 'react'
import './topbtn.scss'
import { FaArrowUp } from "react-icons/fa";

const TopBtn = () => {
  const [showTopBtn,setShowTopBtn] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>653){
        setShowTopBtn((prev)=>!prev)
      }
    })
  },[])

  const handleClick=(e)=>{
    e.preventDefault();
    window.scrollTo({
      top:0,
    })
  }
  return (
    showTopBtn?( 
      <button className='topBtn' onClick={handleClick}>
        <FaArrowUp className='arrow' />
      </button>):null 
  )
}

export default TopBtn
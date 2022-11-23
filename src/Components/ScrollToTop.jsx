import React, { useEffect } from 'react'

function ScrollToTop() {
    const scrollBtn = document.getElementById('scrollBtn')
    // useEffect(()=>{
    //     scrollFunc()
    // },[window.onscroll])
    window.onscroll = ()=>{scrollFunc()}
    const scrollTop = ()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }
    const scrollFunc = ()=>{
        if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
            scrollBtn.style.display = "block"
        } else{
            scrollBtn.style.display = "none"
        }
    }
  return (
    <button id='scrollBtn' className='scrollBtn' onClick={()=>scrollTop()}>Move to Top</button>
  )
}

export default ScrollToTop
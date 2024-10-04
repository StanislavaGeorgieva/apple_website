import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo , smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {


const [videoSrc,setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)

const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
        setVideoSrc(smallHeroVideo)
    }else{
        setVideoSrc(heroVideo)
    }
}

useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet)
    return () => window.removeEventListener('resize',handleVideoSrcSet)
},[])
    useGSAP(()=>{
        gsap.to('#hero',{opacity:1,delay:2})
        gsap.to('#cta',{opacity:1, y:-50 , delay:2})
    },[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
      <p id="hero" className="hero-title">iPhone 16 Pro Max</p>
      <div className="md:w-10/12 w-9/12">
      <video className="pointer-events-none" autoPlay muted playsInline={true} key = {videoSrc}>
        <source src={videoSrc}/>
      </video>
      </div>
      </div>

      <div 
      id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20">
<a href="#highlights" className="btn">Explore</a>
      </div>
    </section>
  )
}

export default Hero

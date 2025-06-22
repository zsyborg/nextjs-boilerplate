'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import $ from 'jquery';



export default function Home() {
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const introvideoRef = useRef<HTMLVideoElement>(null)
  const[isAbout, setisAbout] = useState(false)
  const [showVideo, setShowVideo] = useState(true);
  const[isServ, setisServ] = useState(false)
  const[ispro, setispro] = useState(false)
  const[isbra, setisbra] = useState(false)
  
  
  const toggleServices = () => {
    setisServ(!isServ);
    console.log('toggled')
  }

  const toggleAbout = () => {
    setisAbout(!isAbout);
    console.log('toggled')
  }

  const toggleBrand = () => {
    setisbra(!isbra);
    console.log('toggled')
  }

  const toggleProduct = () => {
    setispro(!ispro);
    console.log('toggled')
  }




  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };


  useEffect(() => {
    if (introvideoRef.current) {
      introvideoRef.current.play();
      introvideoRef.current.requestFullscreen();
    }
    videoRef.current?.play()
  }, []);

  
  const handleVideoEnd = () => {
    setShowVideo(false);
    document.exitFullscreen();
    console.log('Video Ended')
  };


  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-bodini-moda)]">
      <div className="bg-neutral-500 w-full">
        <h3 className="text-4xl text-center py-3">Sidenav</h3>
      </div>
      <p>Test</p>
      <p>Test</p>
    </div>

  );
}

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import Image from 'next/image';
import css from 'styled-jsx/css';
import { TfiClose } from 'react-icons/tfi';



const SvgGsap = () => {
  
  return (
    <>
    
    <div className={isAbout ? 'min-h-screen min-w-screen absolute top-0 left-0 z-10 font-[family-name:var(--font-bodoni-moda)]' : 'hidden'} style={{backgroundColor:'#3E160C'}}>
      <div className="min-h-screen justify-center justify-items-center items-center grid content-center ">
        <a className="absolute top-0 right-0 z-10" onClick={toggleServices} href="#">
    
      <h2 className="text-4xl p-8 cursor-pointer font-light text-right font-[family-name:var(--font-geist-sans)]" style={{color:"##E8D9C4"}}>
        <TfiClose style={{color:"##E8D9C4"}}/>
      </h2>
        </a>
    
          {/* <Image
            src="/tagline.svg"
            alt="MR Intl Logo"
            width={200}
            height={100}
            className="justify-center text-center"
            /> */}
    
            {/* <SvgTag/> */}
            <p>A Spirit of Enterprise. An Obsession for Quality</p>
          <h2 className="p-8 text-justify content" style={{color:"##E8D9C4"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</h2>
    
    
      </div>
    </div>

    </>

  );
};


export default SvgGsap;
'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/router";
// import SvgGsap from "./components/SvgGsap";
import $ from 'jquery';



export default function Home() {
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const introvideoRef = useRef<HTMLVideoElement>(null)
  const[isAbout, setisAbout] = useState(false)
  const [showVideo, setShowVideo] = useState(true);
  const[isServ, setisServ] = useState(false)
  const[ispro, setispro] = useState(false)
  const[isbra, setisbra] = useState(false)
  // const router = useRouter()
  
  const toggleServices = () => {
    setisServ(!isServ);
    console.log('toggled')
    // window.document.URL('/services.html')
    // router.push('/services.html');
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
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
<div>
    {/* {showVideo && (
    <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 1,
        }}
        onEnded={handleVideoEnd}
        onEndedCapture={handleVideoEnd}
      />
    )} */}

    {/* Small Screen */}
    
    <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 xl:grid-cols-4 min-h-screen xl:hidden lg:hidden ">
    <a href="/brands.html">
    <div className="justify-center h-full items-end relative grid videocontainer">
    <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute vid top-0 left-0 w-full h-full object-cover object-right"
        src="/brands.mp4"
        style={{objectPosition:'right'}}
      />
      <div className=" z-10 conbox pl-1 w-full h-14 items-center overflow-hidden content-center">
        {/* <p className="text-2xl w-screen" style={{fontSize:'12pt'}}>
          Brands
        </p> */}
        <p className="w-screen" style={{fontSize:'12pt'}}>Names we carry</p>
      </div>
      {/* <p className="text-white boxline" style={{backgroundColor:"var(--rough)"}}>Brands</p> */}
    </div>
    </a>
    
    
    <a href="/services.html">
      <div className="justify-center h-full items-end relative grid videocontainer " onClick={toggleProduct}>
      <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute vid top-0 left-0 w-full h-full object-cover"
          src="/products.mp4"
        />
        <div className=" z-10 conbox h-14 pl-1 items-center mobbox overflow-hidden content-center">
        {/* <p className=" text-2xl w-screen" style={{fontSize:'12pt'}}>

            Products
          </p> */}
          <p className="w-screen" style={{fontSize:'12pt'}}>Curated Works</p>
        </div>
      </div>
    </a>


    <a href="/services.html">
    <div className="justify-center h-full items-end grid relative videocontainer" >
    <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute vid top-0 left-0 w-full h-full object-cover"
        src="/services.mp4"
      />
      <div className=" z-10  h-14 pl-4 box conbox overflow-hidden items-center content-center">
      {/* <p className=" text-2xl w-screen" style={{fontSize:'12pt'}}>

          Services
        </p> */}
        <p className="w-screen" style={{fontSize:'12pt'}}>Our Praxis</p>
      </div>
    </div>
    </a>




    <a href="about.html">
    <div className="justify-center h-full relative items-center grid">
      <div className="text-center flex flex-col items-center content-centertext-center">
    <p className=" gold" style={{fontSize:'14pt'}}>Est. 2000</p>
          <Image
           src="/newlogo.png"
           alt="MR Intl Logo"
            width={111}
            height={100}
            className="mrlogo"
          />

        <p className="pale text-center  gold">
          A Spirit of Enterprise
          </p>
          <p className="text-center pale  gold">An Obsession for Quality</p>
        </div>
    </div>
    </a>
</div>

{/* font-[family-name:var(--font-bodoni-moda)] */}



{/* Large Screen */}

<div className="grid largescreen grid-cols-2 lg:grid-cols-4 gap-1 xl:grid-cols-4 min-h-screen ">
      <a href="/about.html" className="h-screen" >
    <div className="justify-center items-center content-center h-full grid bg-slate-900">
        <div className="text-center pale">
          <p className=" gold" style={{fontSize:'14pt'}}>Est. 2000</p>
          <Image
           src="/newlogo.png"
           alt="MR Intl Logo"
            width={222}
            height={100}
            style={{objectPosition:'right'}}

          />

        </div>
        <p className="pale text-center  gold">
          A Spirit of Enterprise
          </p>
          <p className="text-center pale  gold">An Obsession for Quality</p>
      {/* <p className=" p-2 text-white boxline" style={{backgroundColor:"var(--rough)"}}>About Us</p> */}
    </div>
      </a>
      <a href="/brands.html" className="h-screen" >
    <div className="justify-center relative videocontainer h-full items-end grid overflow-clip" >
      <div className=" z-10 gold h-30 items-center content-center conbox" style={{ width:"477px"}}>
        {/* <p className="p-2 text-3xl" >
          Brands
        </p> */}
        <p className="pl-4" style={{fontSize:'24pt'}}>Names we carry</p>

      </div>
    <video
      
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute vid top-0 left-0 w-full h-full object-right object-cover"
        src="/brands.mp4"
      />
    </div>
  </a>

  <a href="/products.html" className="h-screen" >

    <div className="justify-center videocontainer h-full relative items-end grid overflow-clip font-fa"  >
    <div className=" z-10 w-100 gold h-30 items-center content-center conbox" style={{width:"477px"}}>
      {/* <p className="p-2 text-3xl">
        Products
      </p> */}
      <p className="pl-4" style={{fontSize:'24pt'}}>Curated Works</p>

      </div>
    <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 vid left-0 w-full h-full object-cover"
        src="/products.mp4"
      />
    </div>
    </a>

    <a href="/services.html" className="h-screen" >

    <div className="justify-center items-end grid h-full relative videocontainer">
    <div className="z-10 w-100 gold h-30 items-center content-center conbox" style={{ width:"477px"}}>
      {/* <p className="p-2 text-3xl">
        Services
      </p> */}
      <p className="pl-4" style={{fontSize:'24pt'}}>Our Praxis</p>

      </div>
    <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute vid top-0 left-0 w-full h-full object-cover"
        src="/services.mp4"
      />
    </div>
    </a>
</div>

{/* <div className="min-h-screen min-w-screen grid items-center justify-center lg:hidden xl:hidden absolute top-0 left-0 z-10 ">
  <Image
    src="/logo.png"
      alt="MR Intl Logo"
    width={222}
    height={100}
  />
</div> */}


{/* About Section */}

   {/* <SvgGsap/> */}
   {/*  */}
<div className={isAbout ? 'min-h-screen min-w-screen zoom-fade-in absolute zoom-fade-in top-0 left-0 z-10 ' : 'transition-all scale-0 absolute top-0 left-0 duration-1000 opacity-0'} style={{backgroundColor:'#3E160C'}}>
  <div className="min-h-screen justify-center justify-items-center items-center grid content-center ">
    <a className="absolute top-0 right-0 z-10" onClick={toggleAbout} href="#">

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




    <div className={isServ ? 'min-h-screen min-w-screen absolute top-0 left-0 zoom-fade-in z-10 ' : 'transition-all scale-0 absolute top-0 left-0 duration-1000 opacity-0'} style={{backgroundColor:'#3E160C'}}>
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
            <p className="gold text-2xl">Services</p>
          <h2 className="p-8 text-justify content" style={{color:"##E8D9C4"}}>Digital Media & IT Solutions</h2>
          <p className="gold">At [Your Company Name], we're at the forefront of innovation, offering cutting-edge Digital Media and IT Solutions tailored to meet the evolving needs of businesses and individuals. Our expertise spans a wide range of services, from developing captivating digital media campaigns to crafting bespoke IT solutions that drive efficiency, productivity, and growth. Whether you're looking to elevate your brand's online presence, streamline your operations, or harness the power of technology to achieve your goals, our team of experts is here to guide you every step of the way.
            </p>
            <br/>
            <p className="gold">
              
          In addition to our Digital Media and IT Solutions, we're also passionate about empowering our clients to navigate the exciting world of Web3. From blockchain development and NFT creation to decentralized applications and cryptocurrency integration, we're here to support you on your journey.</p>
    
    
      </div>
    </div>


    

    <div className={ispro ? 'min-h-screen min-w-screen absolute top-0 left-0 zoom-fade-in z-10 ' : 'transition-all scale-0 absolute top-0 left-0 duration-1000 opacity-0'} style={{backgroundColor:'#3E160C'}}>
      <div className="min-h-screen justify-center justify-items-center items-center grid content-center ">
        <a className="absolute top-0 right-0 z-10" onClick={toggleProduct} href="#">
    
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
            <p className="gold text-2xl">Products</p>
          <h2 className="p-8 text-justify content" style={{color:"##E8D9C4"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</h2>
    
    
      </div>
    </div>




    <div className={isbra ? 'min-h-screen min-w-screen absolute top-0 left-0 zoom-fade-in z-10 ' : 'transition-all scale-0 absolute top-0 left-0 duration-1000 opacity-0'} style={{backgroundColor:'#3E160C'}}>
      <div className="min-h-screen justify-center justify-items-center items-center grid content-center ">
        <a className="absolute top-0 right-0 z-10" onClick={toggleBrand} href="#">
    
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
            <p className="gold text-2xl">Brands</p>
          <h2 className="p-8 text-justify content" style={{color:"##E8D9C4"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</h2>
    
    
      </div>
    </div>






</div>
  );
}

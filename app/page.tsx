'use client'
import Image from "next/image";
import { useState, useRef } from "react";


export default function Home() {
  
  const[isAbout, setisAbout] = useState(false)
  
  const toggleAbout = () => {
    setisAbout(!isAbout);
    console.log('toggled')
  }

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
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
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 min-h-screen xl:hidden lg:hidden font-[family-name:var(--font-bodoni-moda)]">
    <div className="justify-center items-center grid abt">
      <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Brands</p>
    </div>
    <div className="justify-center items-center grid brand">
      <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Products</p>
    </div>
    <div className="justify-center items-center grid relative videocontainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/globe.mp4"
      />
      <p className="p-2 text-white boxline z-10" style={{backgroundColor:"var(--navy)"}}>Services</p>
    </div>
    <div className="justify-center items-center grid serv" onClick={toggleAbout}>
      <p className=" p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>About Us</p>
    </div>
</div>


<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 min-h-screen sm:hidden font-[family-name:var(--font-bodoni-moda)]">
    <div className="justify-center items-center grid serv" onClick={toggleAbout}>
      <p className=" p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>About Us</p>
    </div>
    <div className="justify-center items-center grid abt">
      <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Brands</p>
    </div>
    <div className="justify-center items-center grid brand">
      <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Products</p>
    </div>
    <div className="justify-center items-center grid relative videocontainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/globe.mp4"
      />
      <p className="p-2 text-white boxline z-10" style={{backgroundColor:"var(--navy)"}}>Services</p>
    </div>
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
<div className={isAbout ? ' min-h-screen min-w-screen absolute top-0 left-0 z-10 bg-amber-700 font-[family-name:var(--font-bodoni-moda)]' : 'hidden'}>
  <div className="min-h-screen justify-center items-center grid content-center ">
    <a className="absolute top-0 right-0 z-10" onClick={toggleAbout} href="#">

  <h2 className="text-white text-4xl cursor-pointer font-light text-right  font-[family-name:var(--font-geist-sans)]">X</h2>
    </a>

      <Image
        src="/logo.png"
        alt="MR Intl Logo"
        width={200}
        height={100}
        className="justify-center text-center"
        />
      <h2 className="p-8 text-justify content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</h2>


  </div>
</div>
</div>
  );
}

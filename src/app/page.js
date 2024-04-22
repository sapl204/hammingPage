"use client"

import Image from "next/image";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Codification from "@/components/Codification.jsx";
import Correction from "@/components/Correction";
export default function Home() {
    const tSBtnContainer = useRef();
    const stretchLine = () =>{
      const tsBtn = tSBtnContainer.current.childNodes[0];
      tsBtn.style.width = "140px";
    }
  
    const shrinkLine = () =>{
        const tsBtn = tSBtnContainer.current.childNodes[0];
        tsBtn.style.width = "0px";
    }
    
  return (
    <>
      <header  className = " bg-content1 flex justify-center items-center h-screen sm:justify-around" >
        <div className="leftSideHeader mr-0 sm:mr-20 w-50 ">
            <h1 className="font-bold mb-30px text-start text-xl ">Hamming</h1>
            <h1 className="font-bold text-xl text-end"> codes! </h1>
          <div onMouseEnter={stretchLine} onMouseLeave={shrinkLine} ref={tSBtnContainer} className="flex justify-center items-center">
            <hr className="absolute transition-all"/>
           <button className="titleSectionBtn" onClick={()=> scrollTo(0, 600)}><FontAwesomeIcon icon={faArrowDown}/></button>
          </div>
        </div>
        <Image className="hidden sm:flex" src="/binary-code-svgrepo-com.svg" width={300} height={300}/>
     </header>
     <Codification/>
     <Correction/>
    </>
  );
}


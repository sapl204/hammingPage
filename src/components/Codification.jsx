"use client"

import { useRef } from "react";

export default function Codification(){
  const inputsContainer = useRef();
  const next = e =>{ 
    if(e.target.nextSibling){
      e.target.nextSibling.focus()
    }else{
      e.target.parentNode.firstChild.focus()
    }
  }
  return(
     <>
        <section className="h-96">
          <h2 className="text-center pt-10 font-bold text-xl"> Codificate your binary Code: </h2>
          <div ref={inputsContainer} className="flex justify-center items-center pt-20">
           
            {[ "" ,"", "", ""].map((input, index)=>{
              if (index == 0){
                return  <input maxLength={1} onChange={next}  className="h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl"/>
              }else{
                return <input maxLength={1} onChange={next} className="ml-10 h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl"/>
              }
            })}
          </div>
        </section>
     </>   
  );
}

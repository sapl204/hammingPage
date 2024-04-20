"use client"
import { multiply } from "mathjs";
import { useRef, useCallback } from "react";
import { Button } from "@nextui-org/react";
export default function Codification(){
  const inputContainer = useRef();
  const next = e =>{ 
    if(!isNaN(parseInt(e.target.value)) && e.target.nextSibling != undefined){
      e.target.classList.contains("bg-danger") ? e.target.classList.remove("bg-danger") : null
      e.target.nextSibling.focus()
    }else if(isNaN(parseInt(e.target.value))){
      return;
    }else{
      e.target.parentNode.firstChild.focus();
    }
  }

  const codificateHamming = e => {
    const binary = [];
    const generatorMatrix = [[1,0,0,0,0,1,1],
                                [0,1,0,0,1,0,1],
                                [0,0,1,0,1,1,0],
                                [0,0,0,1,1,1,1]];
    for(let i of inputContainer.current.childNodes){
      if(isNaN(parseInt(i.value)) || parseInt(i.value) > 1 ){
        i.classList.add("bg-danger");
        continue;
      }else i.classList.remove("bg-danger");
      binary.push(parseInt(i.value))
    }
    try{
        const matrixCodificated = multiply(binary, generatorMatrix).map(x => x%2 == 0 ? x=0 : x=1);
        let matrixCodificatedString = "";
        matrixCodificated.map(x => {
            matrixCodificatedString += x;
        })
        e.target.nextSibling.firstChild.innerHTML = "Your [7,4]-Hamming Binary Code: "
        e.target.nextSibling.nextSibling.innerHTML = matrixCodificatedString;
        window.scrollTo(0, 800);
      
    }catch(e){
      console.log("an error have ocurred");
    }
}
  const codificateResultContainer = useCallback(node =>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 300) node.lastChild.classList.replace("w-0", "w-full")
      else node.lastChild.classList.replace("w-full", "w-0")
    })
  },[])

  return(
     <>
        <section id="codification" className="h-fit flex justify-center flex-col items-center">
          <h2 className="mt-10 font-bold text-xl"> Codificate your binary Code: </h2>
          <div className="pt-20" ref={inputContainer}>
            {[ "" ,"", "", ""].map((input, index)=>{
              if (index == 0){
                return  <input maxLength={1} onChange={next}  className="h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/>
              }else{
                return <input maxLength={1} onChange={next} className="ml-10 h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/>
              }
            })}
          </div>
          <Button onClick={codificateHamming} className="flex justify-content mt-10 mb-5 font-bold">Shoot</Button>
          <div ref={codificateResultContainer}>
            <h3 className="text-xl sm:text-l"></h3>
            <hr className="transition-all delay-200 w-0 m-auto bg-white"/>
          </div>
          <p className="tracking-widest font-bold text-xl sm:text-l mb-10"></p>
        </section>
     </>   
  );
}

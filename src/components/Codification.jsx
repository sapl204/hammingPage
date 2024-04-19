"use client"
import { multiply } from "mathjs";
import { useRef } from "react";
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
        i.classList.add("bg-red");
        return;
      }else i.classList.remove("bg-red");
      binary.push(parseInt(i.value))
    }
    const matrixCodificated = multiply(binary, generatorMatrix).map(x => x%2 == 0 ? x=0 : x=1);
    let matrixCodificatedString = "";
    matrixCodificated.map(x => {
        matrixCodificatedString += x;
    })
    e.target.nextSibling.innerHTML = matrixCodificatedString;
    
  }
  return(
     <>
        <section className="h-fit flex justify-center flex-col items-center">
        
          <h2 className="pt-10 font-bold text-xl"> Codificate your binary Code: </h2>
          <div className="pt-20" ref={inputContainer}>
            {[ "" ,"", "", ""].map((input, index)=>{
              if (index == 0){
                return  <input maxLength={1} onChange={next}  className="h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/>
              }else{
                return <input maxLength={1} onChange={next} className="ml-10 h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/>
              }
            })}
          </div>
          <Button onClick={codificateHamming} className="flex justify-content mt-10 mb-10 font-bold">Shoot</Button>
          
          <p className="tracking-widest font-bold text-xl"></p>
        </section>
     </>   
  );
}

"use client"
import { useState, useEffect } from "react"

export default function InputsGroup(props){
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
  const [inputs, setInputs] = useState([<input maxLength={1} onFocus={e => e.target.classList.replace("opacity-50", "opacity-full")}
     onBlur={e => e.target.value == "" ? e.target.classList.replace("opacity-full", "opacity-50") : null}
     onChange={next} className=" opacity-50 h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/> ]);
  const [counter, setCounter] = useState(1);
  useEffect(() =>{
    if(counter < props.inputsQuantity-1){
          setInputs(e => [...e, <input maxLength={1} onFocus={e => e.target.classList.replace("opacity-50", "opacity-full")}
              onBlur={e => e.target.value == "" ? e.target.classList.replace("opacity-full", "opacity-50") : null}
              onChange={next} className=" opacity-50 ml-10 h-14 w-14 sm:h-36 sm:w-36 border-none outline-none text-center text-xl transition-background focus:bg-primary"/>])
          setCounter(counter + 1);
    }else{
      return;
    }
  }
   
  , [counter])
  return(
    <>
      <div ref={props.refer} > 
        {inputs}    
      </div>
    </>
  )  
}

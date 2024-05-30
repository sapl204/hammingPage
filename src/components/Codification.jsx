"use client"
import { multiply } from "mathjs";
import { useRef, useCallback } from "react";
import MathJax from "./Mathjax";
import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import InputsGroup from "./InputsGroup";
import CodificationExp from "./CodificationExp";
import MagicButton from "./MagicButton"; 
export default function Codification(){
  const inputContainer = useRef();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
        setTimeout(()=>{
          e.target.nextSibling.nextSibling.nextSibling.classList.replace("top-24", "top-0")
        }, 1000)
      
    }catch(e){
      console.log("an error have ocurred");
    }
}
  const codificateResultContainer = useCallback(node =>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 400) node.lastChild.classList.replace("w-0", "w-full")
      else node.lastChild.classList.replace("w-full", "w-0")
    })
  },[])
  const content = `To codificate we just take the given word $\\textbf{w} \\in \\mathbb{F}_2^4$ and multiply it with the generator matrix $G$ from the Hamming binary code $\\mathscr{H}_3.$ That matrix is 
  $$G = \\left( \\begin{array}{cccc|ccc}
     1 & 0 & 0 & 0 & 0 & 1 & 1 \\\\
     0 & 1 & 0 & 0 & 1 & 0 & 1 \\\\
     0 & 0 & 1 & 0 & 1 & 1 & 0 \\\\
     0 & 0 & 0 & 1 & 1 & 1 & 1   
     \\end{array} \\right)$$`
  return(
     <>
        <section id="codification" className="h-fit flex justify-center flex-col items-center bg-gradient-to-l  from-black to-primary-50">
          <h2 className="mt-10 font-bold text-xl mb-5"> Codificate your binary Code: </h2>
          <InputsGroup inputsQuantity={4} refer = {inputContainer}/>
          <MagicButton event={codificateHamming} content="Shoot!!"/>
          <div ref={codificateResultContainer}>
            <h3 className="text-xl sm:text-l"></h3>
            <hr className="transition-all delay-200 w-0 m-auto bg-white"/>
          </div>
          <p className="tracking-widest font-bold text-xl sm:text-l ">
          </p>
          <div className="flex justify-end w-full transition-all relative top-24 ">
            <Tooltip showArrow = {true}content={<p className="font-bold">Click me to know what's happening</p>}>
              <Button onPress={onOpen} className=" min-w-unit-10 bg-transparent mr-10 sm:mr-40 mb-10 border-solid border-2 border-white rounded-full font-bold pl-2 pr-2
                hover:bg-white hover:text-content1 transition-all">?</Button>
            </Tooltip>
          </div>
          <MathJax/>
          <CodificationExp isOpen = {isOpen} onOpenChange={onOpenChange} content={content} title="Codification" />
        </section>
     </>   
  );
}

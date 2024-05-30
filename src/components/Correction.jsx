import { multiply } from "mathjs";
import MagicButton from "./MagicButton";
import { useCallback } from "react";
import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import CodificationExp from "./CodificationExp";
export default function Correction(){
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const correction = e =>{
      const code = e.target.parentNode.firstChild.nextSibling.value
      if (code.length < 7) return;
      const codeArray = code.split("").map(x => parseInt(x));
      for( let i of codeArray){
        if (isNaN(i) || i > 1){
          return;
        } 
      }
      const parityCheck = [[0,0,0,1,1,1,1],
                           [0,1,1,0,0,1,1],
                           [1,0,1,0,1,0,1]]
      const syndrome = multiply(parityCheck, codeArray).map(x => x%2==0 ? x = 0 : x = 1);
      const syndromeString = syndrome.map(x => String(x)).join("");
      if(syndromeString == "000" ){
        e.target.nextSibling.firstChild.innerHTML = "There are not any error";
        window.scrollTo(0, 1600);
      }
      else{
        const bit = parseInt(syndromeString, 2);
        const correction = codeArray.map((x, index) =>{
         if(index == bit - 1){
           return x == 1 ? x = 0 : x = 1
         }else{
           return x;
         } 
        })
        e.target.nextSibling.firstChild.innerHTML = "Correction here Sir: ";
        e.target.nextSibling.nextSibling.innerHTML = correction.join("");
        window.scrollTo(0, 1600);
        setTimeout(()=>{
          e.target.nextSibling.nextSibling.nextSibling.classList.replace("top-24", "top-0")
        }, 1000)

      }
      
     }

     const correctionResultContainer = useCallback(node =>{
       window.addEventListener("scroll", () =>{
         if(window.scrollY >= 800) node.lastChild.classList.replace("w-0", "w-full")
         else node.lastChild.classList.replace("w-full", "w-0")
       })
     }, [])

     const content = " We take the codification of the word \\(\\textbf{w}\\), which we'll call \\(\\textbf{w}^*\\), we'll take the parity check matrix \\(H_3\\). If \\(\\textbf{w}^*H_3^t = \\textbf{0}\\), \\(\\textbf{w}^*\\) ain't have any error. On the other hand, if \\(\\textbf{w}^*H_3^t = \\omega\\), where \\(\\omega \\neq \\textbf{0}\\) then the word has an error. if we convert \\(\\omega\\) from binary to decimal, we obtain the position in the vector where it's the error in \\(\\textbf{w}^*\\), since we're in \\(\\mathbb{F}_2\\), is easy correct the error. The Hamming code can fix only one error.  "
  return(
    <>
      <section id="correction" className=" relative z-10 h-fit flex justify-center flex-col items-center bg-gradient-to-r  from-black to-danger-50">
        <p className="mt-10 font-bold text-xl mb-5">Correct it!!</p>
        <input maxLength={7} onBlur={e => e.target.classList.replace("opacity-full", "opacity-50")}  onFocus={e => e.target.classList.replace("opacity-50", "opacity-full") } 
          className="text-center opacity-50 transition-all outline-none text-xl h-14 sm:h-36"/>
        <MagicButton event = {correction} content="Finish Him!!"/>
        <div ref={correctionResultContainer}>
          <h3 className="text-xl sm:text-l"></h3>
          <hr className="transition-all delay-200 w-0 m-auto bg-white"/>
        </div>
        <p className="tracking-widest font-bold text-xl sm:text-l"></p>
        <div className="flex justify-end w-full transition-all relative top-24 ">
          <Tooltip showArrow = {true}content={<p className="font-bold">Click me to know what's happening</p>}>
            <Button onPress={onOpen} className=" min-w-unit-10 bg-transparent mr-10 sm:mr-40 mb-10 border-solid border-2 border-white rounded-full font-bold pl-2 pr-2
              hover:bg-white hover:text-content1 transition-all">?</Button>
          </Tooltip>
        </div>
        <CodificationExp isOpen = {isOpen} onOpenChange={onOpenChange} content={content} title="Correction" />
        
      </section>
    </>
  )
}

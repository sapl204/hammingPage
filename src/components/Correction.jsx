import { multiply } from "mathjs";
import MagicButton from "./MagicButton";
export default function Correction(){
  const correction = e =>{
      const code = e.target.parentNode.firstChild.nextSibling.value
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
        return "there is no error in the given codification";
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
        console.log(correction)
      }
      
     }
  return(
    <>
      <section className="h-fit flex justify-center flex-col items-center bg-gradient-to-r  from-black to-danger-50">
        <p className="mt-10 font-bold text-xl mb-5">Correct it!!</p>
        <input maxLength={7} onBlur={e => e.target.classList.replace("opacity-full", "opacity-50")}  onFocus={e => e.target.classList.replace("opacity-50", "opacity-full") } 
          className="text-center opacity-50 transition-all outline-none text-xl h-14 sm:h-36"/>
        <MagicButton event = {correction} content="Finish Him!!"/>
      </section>
    </>
  )
}

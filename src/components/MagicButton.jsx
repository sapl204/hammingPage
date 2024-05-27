import { Button } from "@nextui-org/react"

export default function MagicButton(props){
  return(
   <>
     <Button onClick={props.event} 
       className="flex justify-content mt-10 mb-5 font-bold 
       bg-transparent border-solid border-2 border-white hover:text-black 
       hover:bg-white pl-10 pr-10 before:content-none before:bg-white before:w-10 outline-none">{props.content}</Button>
   </> 
  )
}

import { AcmeLogo } from "./AcmeLogo"
export default function Footer(){
  return(
    <footer className="flex bg-black justify-center w-full h-28 items-center relative z-10">
        <AcmeLogo/>
        <h3 className="font-bold">Hamming</h3>
        
    </footer>
  )
}

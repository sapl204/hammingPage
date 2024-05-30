"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MathJaxContext } from "better-react-mathjax";

export function Providers({children}){
  return(
    <>
      <NextUIProvider> <MathJaxContext>{children}</MathJaxContext></NextUIProvider>
    </>
  )
}

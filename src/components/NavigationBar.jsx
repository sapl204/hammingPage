"use client"
import React from "react";
import {Navbar, NavbarBrand, 
  NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem,
  NavbarMenuToggle} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {AcmeLogo} from "./AcmeLogo.jsx";
import { useState } from "react";
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hideAndScrollCodif = () =>{
    setIsMenuOpen(false);
    setTimeout(()=>{
      window.scroll(0, 600)
    },300)
  }

  const hideAndScrollCorrect = () =>{
    setIsMenuOpen(false);
    setTimeout(()=>{
      window.scroll(0, 800)
    },300)
  }

  const hideAndScrollBanner = () =>{
    setIsMenuOpen(false);
    setTimeout(()=>{
      document.getElementById("pageBanner").scrollIntoView()
    },300)
    
  }
  return (
    <Navbar className="fixed bg-transparent backdrop-blur-md "  
            shouldHideOnScroll
            isMenuOpen = {isMenuOpen}
            onMenuOpenChange = {setIsMenuOpen}  >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link onClick={hideAndScrollBanner} color="foreground">
            <AcmeLogo />
            <p className="font-bold text-inherit">Hamming</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand >
          <Link href="#pageBanner" color="foreground">
            <AcmeLogo />
            <p className="font-bold text-inherit">Hamming</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className=" hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#codification">
            Codification
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#correction" aria-current="page">
            Correction
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-transparent backdrop-blur-md " >
        <NavbarMenuItem><Link onClick={hideAndScrollCodif} className="w-full"  color="foreground">Codification</Link></NavbarMenuItem>
        <NavbarMenuItem><Link onClick={hideAndScrollCorrect} className="w-full"  color="foreground">Correction</Link></NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import useScrollDirection from "@/hooks/useScroll";



const Navbar = () => {


  
 const scrollingUp   =useScrollDirection()

 
 
  
  
  return (
    <nav className={`${scrollingUp? ' -translate-y-full' : ''} fixed  flex bg-white h-14 items-center justify-between px-5  w-full top-0 z-10` }>
      <Link href={'/'} className=" cursor-pointer">
        <Image src="./nike.svg" alt="nike" width={70} height={70} />
      </Link> 
      <div className="hidden lg:flex gap-x-7 h-full relative font-semibold ">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.title}
            href={navLink.link}
            className="h-full flex items-center border-b-2 border-transparent hover:border-black"
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-4 items-center">
        <SearchBar />
        <AiOutlineHeart className="text-3xl" />
        <BsBag className="text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;


"use client";
import React, { useState } from "react";
import useScrollDirection from "@/hooks/useScroll";

import AccordionComponent from "./Accordion";
import { sizes } from "@/constants/constants";

const Filter = () => {
  const scrollUp = useScrollDirection();
  const sizess:number[] = sizes();
  console.log(sizess);
  

  return (
    <div
      id="filters"
      className={`sticky ${
        scrollUp ? "top-12  h-filterBig" : " top-[104px]  h-filterSmall "
      } bg-white w-64  pl-6 text-lg pr-1`}
    >
      <div>
        <p>Pick Up Today</p>
      </div>
      <AccordionComponent title={"Gender"}>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <input type="checkbox" id="male" name="male" value="male" />
            <label htmlFor="male"> Male</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="female" name="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="unisex" name="unisex" value="unisex" />
            <label htmlFor="unisex">Unisex</label>
          </div>
        </div>
      </AccordionComponent>
      <AccordionComponent title="Size">
        <div className="grid grid-cols-3 w-full  flex-wrap gap-x-4  gap-y-2">
          {sizess.map(size=>(
            <div className=" border-gray-300 border cursor-pointer px-2 flex hover:border-black  items-center justify-center">
              <p className="">{size}</p>
            </div>
          ))}
        </div>
      </AccordionComponent>
      
    </div>
  );
};

export default Filter;

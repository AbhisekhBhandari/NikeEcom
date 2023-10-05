"use client";
import useScrollDirection from "@/hooks/useScroll";
import Image from "next/image";
import React from "react";
import ShowDrop from "@/Components/ShowDrop";
import useFilterToggle from "@/hooks/useFilterToggle";
import { FilterContextType } from "@/types/types";

const ShopTopbar = () => {
  const scrollUp = useScrollDirection();
  const { showFilter, setShowFilter } = useFilterToggle() as FilterContextType;

  return (
    <div
      className={`flex  items-center text-xl px-9 justify-between h-12 md:h-16  fixed select-none overflow-clip bg-white w-full z-10 ${
        scrollUp ? " top-0" : "top-15"
      }  `}
    >
      <p className="md:text-2xl">Shoes & Sneakers (0)</p>
      <div className="flex  items-center gap-8">
        <div
          className="md:flex h-fit bg-purple-300 hidden cursor-pointer items-center gap-2"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <p>{showFilter ? "Hide" : "Show"} Filters</p>
          <Image src={"/filter.svg"} alt="Filter" height={24} width={24} />
        </div>
        <ShowDrop />
        <div className="flex text-[0.97rem] font-semibold  rounded-xl h-8 px-4 md:hidden items-center cursor-pointer border">
          Filters
          <Image src={"/filter.svg"} alt="Filter" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default ShopTopbar;

{
  /* <p className=" font-semibold text-xl">Shoes & Sneakers(0)</p>
<div className="flex">
  <div>
    <button>Hide Filters</button>
    <Image src={"/filter.svg"} alt="filter" width={20} height={20} />
  </div>

  <label htmlFor="sort">Sort By:</label>
  <select id="sort" name="sortFilter">
    <option value="featured">Featured</option>
    <option value="newest">Newest</option>
    <option value="pricehighTolow">Price: High-Low</option>
    <option value="pricelowTohigh">Price: Low-High</option>
  </select>
</div> */
}

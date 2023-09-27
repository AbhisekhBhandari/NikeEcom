import Filter from "@/Components/Filter";
import ShopTopbar from "@/Components/ShopTopbar";
import React from "react";

const Shop = () => {
  return (
    <div className=" flex flex-col h-full relative">
      <ShopTopbar/>
      <div className="flex bg-slate-400 flex-1 h-full ">
        <Filter/>
        <div id="productView" className=" h-[400vh]">
          ProdView
        </div>
      </div>
    </div>
  );
};

export default Shop;


import Filter from "@/Components/Filter/Filter";
import ProdView from "@/Components/ProdView/ProdView";
import ShopTopbar from "@/Components/ShopTopbar";
import React from "react";

const Shop = () => {
  return (
    <div className=" flex flex-col h-full relative">
      <ShopTopbar/>
      <div className="flex  flex-1 h-full ">
        <Filter/>
        <ProdView/>
      </div>
    </div>
  );
};

export default Shop;

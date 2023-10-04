import React from "react";
import ProdCard from "../ProdCard";

const ProdView = () => {


  

  return (
    <div id="productView" className="  mt-16 w-full grid  py-6">
      <div className=" grid  gap-5  px-2 md:px-14 grid-cols-2 twoGrid:grid-cols-3   " id="products" >
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>

      </div>
    </div>
  );
};

export default ProdView;

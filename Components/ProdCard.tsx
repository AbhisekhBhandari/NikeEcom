import React from 'react'
import Image from "next/image";

const ProdCard = () => {
  return (
    <div className='flex flex-col  w- h-fit gap-2 cursor-pointer'>
    <Image src={"/PropShoes.webp"} alt="shoes" width={300} height={600} className=' w-full h-auto object-cover' />
    <div>
      <p className=' font-semibold text-lg '>Nike Dunk Low Retro</p>
      <p className=' font-semibold text-gray-300'>Men's Shoes</p>

      <p className=' font-semibold  text-lg'>$110</p>
    </div>
  </div>
  )
}

export default ProdCard

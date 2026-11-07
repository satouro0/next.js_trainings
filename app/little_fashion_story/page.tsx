import React from 'react'
import Image from "next/image";
import LtlFasionnav from "../components/LtlFasionnav";
import { FaPlus } from 'react-icons/fa';

export default function Fashion_Story() {
  return (
    <div>
      <LtlFasionnav/>
      <div className='flex bg-green-100 items-center md:flex-row justify-between md:pl-30'>
        <h1 className='text-7xl font-extrabold md:pr-32'><span className='text-orange-500'>Company</span> Fashion</h1>
        <Image
        src={"/litlfasion4.jpg"}
        alt='little fashion 4'
        height={10}
        width={660}/>
      </div>
      <div className='bg-gray-300'>
        <h1 className='text-4xl font-bold'>Meet our <span className='text-orange-500'>team</span></h1>
        <div>
          <div className='flex flex-row'>
            <div className='rounded-full'>
              <Image
              src={"/litlfasion_t1.jpeg"}
              alt='litlfasiont1'
              height={10}
              width={50}/>
            </div>
            <div>
              <h1>Don</h1>
              <h2>Product, VP</h2>
            </div>
            <h1><FaPlus/></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import Header from '../components/header';
import Image from 'next/image';
import yxGraph from '../../../public/yxGraph.svg';
import AreaTriangle from '../../../public/AreaTriangle.webp';
import antiDeri from '../../../public/antiDeri.webp';
import integral from '../../../public/integral.webp';
import integral2 from '../../../public/integral2.webp';
import reimann from '../../../public/reimann_sums.webp';


const Integrals = () => {
  return (
    <div>
      <Header />
      <div className='md:px-20 px-2 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Integrals: </h1>
        <p className="p-4 text-xl">
          The integral is used to get the area under a graph line // curve. There are multiple ways to get the area, like geometry as seen below, but calculus tells us to take the anti derivative to get the formula for the integral.
        </p>
      </div>

      <h1 className="md:mt-12 px-2 md:px-20 p-4 text-5xl md:text-6xl">As a Concept</h1>

      <div className="flex justify-center">
        <div className="md:gap-20 md:flex px-2 md:px-20 p-4">
          <Image src={yxGraph} alt="y=x" width={300} height={50} layout="fixed" className="rounded-lg" />
          <Image className="py-10" src={integral} width={300} height={50} />
          <Image src={integral2} width={300} height={50} />
        </div>
      </div>



      <div className="text-xs p-4 px-2 md:px-20">
        <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
      </div>

      <div className="px-2 md:px-20 p-4">
      <h1 className="md:mt-6 text-4xl md:text-5xl">How to find an Integral</h1>
        <p className="mt-5 text-4xl font-medium">Ones to memorize</p>

        <div className="text-center">
          <Image width={1200} className="md:px-15 py-2 inline-block align-middle" alt="antiderivs" src={antiDeri}></Image>
        </div>
      </div>

      <div className="px-2 md:px-20 p-4">
        <p className="mt-5 text-4xl font-medium">Reimann Sums</p>
        <p className="mt-2 text-xl">
          Reimann sums are a good way to approximate the area under a curve. The more rectangles you use, the more accurate the approximation will be.
        </p>

        <div className="text-center">
          <Image src={reimann} width={1400}></Image>
        </div>

        <p className="mt-2 text-xl">
          Each rectangle's height is determined by a function's value at a chosen sample point within a sub-interval. Adding up the areas of these rectangles provides an approximation of the total area under the curve.
        </p>

      </div>

    </div>
  );
};

export default Integrals;
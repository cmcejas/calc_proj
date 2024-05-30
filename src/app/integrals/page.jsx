import React from 'react';
import Header from '../components/header';
import Image from 'next/image';
import yxGraph from '../../../public/yxGraph.svg';
import AreaTriangle from '../../../public/AreaTriangle.webp';
import antiDeri from '../../../public/AntiDerivatives.svg';
import IntegralDesmos from '../components/IntegralDesmos';


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

      <div className="px-2 md:px-20 p-4">
        <Image className="md:px-15 rounded-lg" width={500} alt="y=x" src={yxGraph}></Image>
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
      
      
      <div className='App'>
        <IntegralDesmos />
      </div>


    </div>
  );
};

export default Integrals;
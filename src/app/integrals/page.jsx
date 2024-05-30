import React from 'react';
import Header from '../components/header';
import Image from 'next/image';
import yxGraph from '../../../public/yxGraph.svg';
import AreaTriangle from '../../../public/AreaTriangle.webp';
import antiDeri from '../../../public/AntiDerivatives.png';

import IntegralDesmos from '../components/IntegralDesmos';


const Integrals = () => {
  return (
    <div>
      <Header />
      <div className='md:px-20 px-2 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Integrals: </h1>
        <p className="md:pt-7 px-2 text-xl">
  The integral is used to get the area under a graph line // curve. There are multiple ways to get the area, like geometry as seen below, but calculus tells us to take the anti derivative to get the formula for the integral.
</p>
      </div>
      <div className='lg:flex p-1'>
        <Image className="md:px-15 rounded-lg" alt="y=x" src={yxGraph}></Image>
        
      </div>

      <div className='text-center'>
        <h1 className="p-6 text-5xl md:text-6xl">Anti-Derivitaves and Indefinite integrals: </h1>
        
        <p1 className="py-10 text-lg">In order to find the area under a curve, we need to take the anti derivative of the function we are trying to integrate. Here are a few anti derivatives to memorize</p1>
        <Image className="md:px-15 py-2 inline-block align-middle" alt="antiderivs" src={antiDeri}></Image>
      </div>
      
      
      <div className='App'>
        <IntegralDesmos />
      </div>


    </div>
  );
};

export default Integrals;
import React from 'react';
import Header from '../components/header';
import Image from 'next/image';
import yxGraph from '../../../public/yxGraph.svg';
import AreaTriangle from '../../../public/AreaTriangle.webp';
import antiDeri from '../../../public/antiDeri.webp';
import integral from '../../../public/integral.webp';
import integral2 from '../../../public/integral2.webp';
import reimann from '../../../public/reimann_sums.webp';
import ftc from '../../../public/ftc.svg';
import intSolv from '../../../public/integral_solve.svg';


const Integrals = () => {
  return (
    <div>
      <Header />
      <div className='md:px-20 px-2 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Integrals: </h1>
        <p className="p-4 text-xl">
          The integral is used to get the area under a graph line // curve. There are multiple ways to get the area, like geometry as seen in the first graph, but calculus tells us to take the anti derivative to get the formula for the integral to solve for the other two.
        </p>
      </div>

      <h1 className="md:mt-12 px-2 md:px-20 p-4 text-5xl md:text-6xl">As a Concept</h1>

      <div className="flex justify-center">
        <div className="md:gap-20 md:flex px-2 md:px-20 p-4">
          <Image src={yxGraph} alt="y=x" layout="fixed" className="cursor-pointer shadow-lg hover:transform hover:-translate-y-1 duration-300 h-50 w-60 rounded-xl" />
          <Image className="cursor-pointer shadow-lg hover:transform hover:-translate-y-1 duration-300 h-50 w-60 rounded-xl" src={integral2} />
          <Image href="https://www.desmos.com/calculator/4svj4ee6jp" className="cursor-pointer shadow-lg hover:transform hover:-translate-y-1 duration-300 h-50 w-60 rounded-xl" src={integral} />
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
          Each rectangle&apos;s height is determined by a function&apos;s value at a chosen sample point within a sub-interval. Adding up the areas of these rectangles provides an approximation of the total area under the curve.
        </p>

      </div>

      <div className="px-2 md:px-20 p-4" id="ftc">
        <p className="mt-5 text-4xl font-medium">Fundamental Theorem of Calculus</p>
        <p className="mt-2 text-xl">
        The Fundamental Theorem of Calculus is an important concept that ties together differentiation and integration. It states that if you have a continuous function, you can find the area under its curve between two points by looking at the antiderivative of the function. It also states that if you integrate a function and then differentiate the result, you will return to the original function.
        </p>
        <div className="md:flex md:gap-40 mt-5">
          <Image className="" width={500} src={ftc} />
          <Image className="" width={600} src={intSolv} />
        </div>
        <div>
          
        </div>
      </div>

    </div>
  );
};

export default Integrals;
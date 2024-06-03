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
      <div className='px-2 md:px-20 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Integrals: </h1>
        <p className="p-4 text-xl">
          The integral is used to get the area under a graph line // curve. There are multiple ways to get the area, like geometry as seen in the first graph, but calculus tells us to take the anti derivative to get the formula for the integral to solve for the other two.
        </p>
      </div>

      <h1 className="p-4 px-2 text-5xl md:mt-12 md:px-20 md:text-6xl">As a Concept</h1>

      <div className="flex justify-center">
        <div className="p-4 px-2 md:gap-20 md:flex md:px-20">
          <Image src={yxGraph} alt="y=x" layout="fixed" className="duration-300 shadow-lg hover:transform hover:-translate-y-1 h-50 w-60 rounded-xl" />
          <Image className="duration-300 shadow-lg hover:transform hover:-translate-y-1 h-50 w-60 rounded-xl" src={integral2} />
          <Image className="duration-300 shadow-lg hover:transform hover:-translate-y-1 h-50 w-60 rounded-xl" src={integral} />
        </div>
      </div>
      <div className="p-4 px-2 md:px-20">
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


      <div className="p-4 px-2 text-xs md:px-20">
        <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
      </div>

      <div className="p-4 px-2 md:px-20">
        <h1 className="text-4xl md:mt-6 md:text-5xl">How to find an Integral</h1>
        <p className="mt-5 text-4xl font-medium">Ones to memorize</p>

        <div className="text-center">
          <Image width={1200} className="inline-block py-2 align-middle md:px-15" alt="antiderivs" src={antiDeri}></Image>
        
          <div class="md:flex md:gap-5 p-4 px-2 md:px-20">
          <div className="p-2 video-wrapper lg:px-10">
              <div className="video-responsive">
                <iframe
                  className="shadow-xl rounded-xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xaCPDMEkbig?si=wN25ErCYuXEQ19OS"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
            <div className="p-2 video-wrapper lg:px-10">
              <div className="video-responsive">
                <iframe
                  className="shadow-xl rounded-xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/sdYdnpYn-1o?si=BNDTPilKxd5L7jOJ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 px-2 md:px-20">
      <p className="mt-5 ml-5 text-4xl font-medium">Integration Examples</p>
        <div className="mt-5 md:gap-5 md:flex">
          <div className="p-2 video-wrapper lg:px-10">
            <div className="video-responsive">
              <iframe className="shadow-xl rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/DYYauEWue-Y?si=9boYoCwpMmmbLzGm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          <div className="p-2 video-wrapper lg:px-10">
            <div className="video-responsive">
              <iframe className="shadow-xl rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/-n0V50SNOjc?si=Qg5fLFz0tPISWXMd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 px-2 md:px-20" id="ftc">
        <p className="mt-5 text-4xl font-medium">Fundamental Theorem of Calculus / Definite Integrals</p>
        <p className="mt-2 text-xl">
        The Fundamental Theorem of Calculus is an important concept that ties together differentiation and integration. It states that if you have a continuous function, you can find the area under its curve between two points by looking at the antiderivative of the function. It also states that if you integrate a function and then differentiate the result, you will return to the original function. This theorom is responsible for the discovery of the definite integral.
        </p>
        <div className="mt-5 md:flex md:gap-40">
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
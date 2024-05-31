import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import tan from '../../../public/tan.svg';
import power_rule from '../../../public/power_rule.svg';
import power_ex from '../../../public/power_ex.svg';
import chain_rule from '../../../public/chain_rule.svg';
import chain_rule_ex from '../../../public/chain_rule_ex.svg';
import common_deriv from '../../../public/common_deriv.webp';
import chain_ex_func from '../../../public/chain_ex_func.svg';
import product_rule from '../../../public/product_rule.svg';
import product_rule_ex from '../../../public/product_rule_ex.svg';
import quotient_rule from '../../../public/quotient_rule.svg';
import quotient_rule_ex from '../../../public/quotient_rule_ex.svg';


const Derivatives = () => {
  return (
    <div>
      <Header />
      <div className='md:px-20 px-2 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Derivative: </h1>
        <p className="md:pt-7 px-2 text-xl">
  The derivative of a function describes the function&apos;s instantaneous rate of change at a certain point. Another common interpretation is that the derivative gives us the slope of the line tangent to the function&apos;s graph at that point.
</p>

      </div>
      <h1 className="md:mt-12 px-2 md:px-20 p-4 text-5xl md:text-6xl">As a Concept</h1>
      <div className="lg:flex p-2">
        <Image className="md:px-20 rounded-lg" alt="tan_graph" src={tan}></Image>
        <div className="video-wrapper p-2 lg:px-20">
          <div className="video-responsive">
            <iframe
              priority
              className="rounded-lg"
              width="560" 
              height="315"
              alt="video"
              src="https://www.youtube.com/embed/N2PpRnFqnqY?si=ml9F0W96bXD3HcNm" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <div className="text-xs p-4 px-2 md:px-20">
        <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
      </div>
      <div className="px-2 md:px-20 p-4">
        <h1 className="md:mt-6 text-4xl md:text-5xl">How to find a Derivative</h1>
        <p className="mt-5 text-4xl font-medium">Ones to memorize</p>
        <div className=""><Image src={common_deriv} width="1000"></Image></div>
        
        <p className="mt-2 text-4xl font-medium">Power Rule</p>
        <div className="md:flex">
          <Image src={power_rule} width="700"></Image>
          <Image src={power_ex} width="700"></Image>
        </div>

        <div>
          <p className="mt-2 text-4xl font-medium">Chain Rule</p>
          <div className="md:flex">
            <Image src={chain_rule} width="700"></Image>
            <Image src={chain_rule_ex} width="700"></Image>
          </div>
          <div className="mt-4 px-5"><Image src={chain_ex_func} width="600"></Image></div>
        </div>

        <div className="text-xs mt-4 p-4 px-2 md:px-20">
          <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
        </div>

        <p className="mt-5 md:mt-20 text-4xl font-medium">Product Rule</p>
        <div className="md:flex">
            <Image src={product_rule} width="700"></Image>
            <Image src={product_rule_ex} width="700"></Image>
        </div>

        <p className="mt-5 md:mt-20 text-4xl font-medium">Quotient Rule</p>
        <div className="md:flex">
            <Image src={quotient_rule} width="700"></Image>
            <Image src={quotient_rule_ex} width="700"></Image>
        </div>

      </div>
    </div>
  );
};

export default Derivatives;
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
      <div className='px-2 md:px-20 md:flex'>
        <h1 className="p-4 text-5xl md:text-6xl">Derivative: </h1>
        <p className="px-2 text-xl md:pt-7">
          The derivative of a function describes the function&apos;s instantaneous rate of change at a certain point. Another common interpretation is that the derivative gives us the slope of the line tangent to the function&apos;s graph at that point.
        </p>
      </div>
      <h1 className="p-4 px-2 text-5xl md:mt-12 md:px-20 md:text-6xl">As a Concept</h1>
      <div className="p-2 lg:flex">
        <Image className="rounded-lg md:px-20" alt="tan_graph" src={tan} priority></Image>
        <div className="p-2 video-wrapper lg:px-20">
          <div className="video-responsive">
            <iframe
              className="rounded-lg shadow-2xl"
              width="560"
              height="315"
              alt="video"
              src="https://www.youtube.com/embed/N2PpRnFqnqY?si=ml9F0W96bXD3HcNm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="p-4 px-2 text-xs md:px-20">
        <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
      </div>
      <div className="p-4 px-2 md:px-20">
        <h1 className="text-4xl md:mt-6 md:text-5xl">How to find a Derivative</h1>
        <p className="mt-5 text-4xl font-medium">Ones to memorize</p>
        <div><Image src={common_deriv} className="" width="1000" priority></Image></div>
        
        <p className="mt-2 text-4xl font-medium">Power Rule</p>
        <div className="md:flex">
          <Image src={power_rule} width="700" priority></Image>
          <Image src={power_ex} width="700" priority></Image>
        </div>

        <div>
          <p className="mt-2 text-4xl font-medium">Chain Rule</p>
          <div className="md:flex">
            <Image src={chain_rule} width="700" priority></Image>
            <div className="p-2 video-wrapper lg:px-10">
              <div className="video-responsive">
                <iframe
                  className="shadow-2xl rounded-xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UlI6oyn_8lw?si=Wl2jW51faPEZ9bhX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="px-5 mt-4"><Image src={chain_ex_func} width="600" priority></Image></div>
        </div>

        <div className="p-4 px-2 mt-4 text-xs md:px-20">
          <div className="bg-black rounded-3xl pt-0.01 px-2">_</div>
        </div>

        <p className="mt-5 text-4xl font-medium md:mt-20">Product Rule</p>
        <div className="md:flex">
          <Image src={product_rule} width="700" priority></Image>
          <div className="p-2 video-wrapper lg:px-10">
            <div className="video-responsive">
              <iframe
                className="shadow-2xl rounded-xl"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AtZxrZ620kM?si=nXZtv8kNg0i2RMOT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <p className="mt-5 text-4xl font-medium md:mt-20">Quotient Rule</p>
        <div className="md:flex">
          <Image src={quotient_rule} width="700" priority></Image>
          <div className="p-2 video-wrapper lg:px-10">
            <div className="video-responsive">
              <iframe
                className="shadow-2xl rounded-xl"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wNvPNTTMhMk?si=7ydhJ77vP0EjuDoo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Derivatives;

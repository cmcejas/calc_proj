import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import tan from '../../../public/tan.svg';


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
        <Image className="md:px-20 rounded-md" alt="tan_graph" src={tan}></Image>
        <div className="video-wrapper p-2 lg:px-20">
          <div className="video-responsive">
            <iframe
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
    </div>
  );
};

export default Derivatives;
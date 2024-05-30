import React from "react";
import './IntegralDesmos.css';

const IntegralDesmos = () => {
    const graphUrl = "https://www.desmos.com/calculator/ptlo2svpxx?embed"; //integral visual url

    return (
      <div className="">
        <iframe
          title="Desmos Graph"
          src={graphUrl}
          width="600"
          height="600"
          className=" hover:cursor-pointer"
          href="https://www.desmos.com/calculator/4svj4ee6jp"
        ></iframe>


      </div>
    );
};

export default IntegralDesmos;
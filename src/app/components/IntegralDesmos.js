import React from "react";
import './IntegralDesmos.css';

const IntegralDesmos = () => {
    const graphUrl = "https://www.desmos.com/calculator/z0zsxbmxaj"; //integral visual url

    return (
      <div className="desmos-container">
        <iframe
          title="Desmos Graph"
          src={graphUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          className="desmos-iframe"
        ></iframe>
      </div>
    );
};

export default IntegralDesmos;
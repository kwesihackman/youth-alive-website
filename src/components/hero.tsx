import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="lgx-banner-info">
        <Image src="/logo.png" alt="" width={800} height={400} />
        <h2 className="title ">
          <span>
            <b>2</b>
            <b>0</b>
            <b>2</b>
            <b>4</b>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;

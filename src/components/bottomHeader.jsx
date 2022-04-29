import React from "react";
import slides from "../assets/slides.png";
import logo1 from "../assets/logo.png";

function bottomHeader() {
  return (
    <div>
      <div className="flex text-blue-900 uppercase justify-start gap-2 ml-20">
        <img
          src={logo1}
          className="mt-[-50px]"
          height={100}
          width={120}
          alt="logo-img"
        />
        <div className="text-lg font-bold">
          {" "}
          <p className="font-semibold">
            {" "}
            dapatkan asuransi gratis dari axa life indonesia
          </p>
          <p className=" text-3xl font-bolder leading-tight">
            {" "}
            untuk pemegang kartu kredit
          </p>
        </div>
      </div>

      <div className="py-5">
        <img src={slides} className="w-full" alt="slides-img" />
      </div>
    </div>
  );
}

export default bottomHeader;

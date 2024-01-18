"use client";

import Image from "next/image";
import React from "react";

const page = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-none mb-7 md:mb-10 text-xl-40 md:leading-normal md:text-xl-42">
        Athlete Representation & Branding
      </h1>
      <div className="container block text-lg font-bold px-5 py-0">
        Hello
      </div>
    </div>
  );
};

export default page;

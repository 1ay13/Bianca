'use client'

import Image from "next/image";
import React from "react";

const page = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-none mb-7 md:mb-10 text-xl-40 md:leading-normal md:text-xl-42">
        Executive Assistant
      </h1>
      <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] transition-all ease-in-out duration-300 aspect-video mb-5 md:mb-10 lg:mb-12 shadow-work-outline translate-y-0 hover:-translate-y-0.5 hover:shadow-work-outline-hover">
        <Image
          loader={imageLoader}
          unoptimized={true}
          priority={false}
          src="/assets/1.png"
          width={1534}
          height={865}
          alt="Picture of the author"
          className="object-cover aspect-[4/3]"
        />
      </div>
    </div>
  );
};

export default page;

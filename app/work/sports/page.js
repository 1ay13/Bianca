"use client";

import Image from "next/image";
import React from "react";

const page = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-snug mb-7 md:mb-10 text-xl-28 max-md:text-center md:text-xl-40">
        Athlete Representation & Branding
      </h1>
      <div className="flex flex-wrap -mx-2 md:-mx-5">
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/1.jpg"
            width={738}
            height={738}
            alt="Athlete Representation & Branding"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">Boston Red Sox Hall of Famer David Ortiz</h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/2.jpg"
            width={855}
            height={641}
            alt="Athlete Representation & Branding"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">Tina Knowles</h5>
        </div>
      </div>
    </div>
  );
};

export default page;

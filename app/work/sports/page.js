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
        Representation & Branding
      </h1>
      <div className="flex flex-wrap -mx-2 md:-mx-5">
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/8.heic"
            width={855}
            height={641}
            alt="Athlete Representation & Branding"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Lara Dallman-Weiss American Sailor & Olympian
          </h5>
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
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Tina Knowles
          </h5>
        </div>
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
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Boston Red Sox Hall of Famer David Ortiz
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/battery3.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Battery
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/harken.heic"
            width={855}
            height={641}
            alt="Athlete Representation & Branding"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Harken Derm
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/Clerksy.heic"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Clerksy
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/IMG_2639.HEIC"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            skep360
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/david.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            David Ortiz
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/IMG_2635.HEIC"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Hublot
          </h5>
        </div>

        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/IMG_2650.jpeg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Bacardi
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/IMG_2654.HEIC"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            GFL
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/pentagon.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Pentagon Studios
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/IMG_2647.PNG"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Ray Of Hope
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/grown.heic"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Grown
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/yash.jpeg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Yash Mistry
          </h5>
        </div>
      </div>
    </div>
  );
};

export default page;

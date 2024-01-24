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
      <div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/Lara.jpg"
            width={855}
            height={641}
            alt="Athlete Representation & Branding"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            LARA DALLMAN-WEISS
          </h5>
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            American Sailor & Olympian
          </h5>
        </div>
      </div>
      <h1 className="font-bold leading-snug mb-7 md:mb-10 text-xl-20 max-md:text-center md:text-xl-30  border-black border-b-2 text-gray-700 pb-2">
        Previous Clients
      </h1>
      <div className="flex flex-wrap -mx-2 md:-mx-5">
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
            TINA KNOWLES
          </h5>
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            American Business Pioneer & Mother to Beyoncé & Solange
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
            DAVID ORTIZ
          </h5>
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Dominican Baseball Hall of Famer & Sports Analyst
          </h5>
        </div>

        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/darmorer.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Dominique Darmorer
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/7.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Marisol Nichols
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/isabele.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Isabela Grutman
          </h5>
        </div>
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/victoria.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Victoria Brito
          </h5>
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Model. Dancer. Creative
          </h5>
        </div>

        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/richard.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Richard Rojas
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
            src="/assets/harken.jpg"
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
            src="/assets/Clerksy.jpg"
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
            src="/assets/skep360.jpg"
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
            src="/assets/hurlon.jpg"
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
            src="/assets/GFL.jpg"
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
            src="/assets/grown.jpg"
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
        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/allen34.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            Ray Allen
          </h5>
        </div>

        <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] mb-5 md:mb-10 lg:mb-12">
          <Image
            loader={imageLoader}
            unoptimized={true}
            priority={false}
            src="/assets/tiy.jpg"
            width={855}
            height={641}
            alt="Clerksy"
            className="object-cover aspect-square rounded-tr-[20px] rounded-bl-[20px] object-center"
          />
          <h5 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
            TIY
          </h5>
        </div>
      </div>
    </div>
  );
};

export default page;

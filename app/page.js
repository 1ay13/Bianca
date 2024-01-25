"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [fetchedData, setFetchedData] = useState("");

  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  const fetchPost = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();
    setFetchedData(data.posts); // Update the state with the fetched data
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="pb-8 md:pb-10">
        <div className="flex justify-center">
          <div className="w-full mb-7">
            {/* <h1 className="mb-4 font-extrabold leading-none text-xl-40 md:leading-normal md:text-xl-42">
              About Me
            </h1> */}
            <div className="mb-12 md:mb-16 shadow-common ">
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/main.jpg"
                width={1055}
                height={1135}
                alt="Picture of the author"
                className="object-cover aspect-video"
              />
            </div>

            <p className="mb-4 font-extrabold leading-snug md:mb-7 text-xl-28 max-md:text-center md:text-xl-40">
              BEYOND PRODUCTIONS
            </p>
            <p className="leading-6 tracking-wide text-black md:leading-8 mb-7">
              BEYOND PRODUCTIONS founded by BIANCA RAMI, director,
              cinematographer, and writer leads a premier film & branding
              production company. We focus on creating compelling narratives,
              speacializing in branded content, documentaries, commercials, &
              social marketing. Our passion for storytelling is emboldened by
              heart found across Hollywood & beyond!
            </p>
            <p className="leading-6 tracking-wide text-black md:leading-8 mb-7">
              Our expertise extends to representing brands, crafting
              negotiations, social marketing and fostering new opportunities for
              brand growth & net-worth.
            </p>
            {/* <p className="mb-8 leading-6 text-black md:leading-8">
              Thank you for joining me on this storytelling journey. Let's
              create, connect, and make magic together.
            </p> */}
            {/* <div className="mb-3">
              <a
                href="/assets/B.Ramirez 1_24 .pdf"
                className="font-bold underline"
              >
                Download resume <span>(General)</span>
              </a>
            </div>
            <div className="mb-3">
              <a
                href="/assets/Classic Resume.pdf"
                className="font-bold underline"
              >
                Download resume <span>(Creative Director)</span>
              </a>
            </div> */}

            {/* <div className="text-lg font-bold">
              <h3 className="mt-12 text-black font-bristone md:text-3xl">
                My Work
              </h3>
              <div className="flex justify-between my-5 -mx-2 max-md:flex-col max-md:gap-2 max-md:text-base">
                <Link className="px-2" href="/work/film">
                  Film Director
                </Link>
                <Link className="px-2" href="/work/sports">
                  Representation & Branding
                </Link>
                <Link className="px-2" href="/work/executive">
                  Executive Assistant
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

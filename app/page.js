"use client";

import VideoIframe from "@/components/YouTube";
import React from "react";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";
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
            <div className="mb-12 md:mb-16 shadow-common">
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/main.jpeg"
                width={1534}
                height={865}
                alt="Picture of the author"
                className="object-fit aspect-[4/3]"
              />
            </div>
            <p className="leading-6 text-black md:leading-8 mb-7">
              Hola I'm Bianca Ramirez! A passionate storyteller, focusing on
              film directing, visual branding & athlete representation.
            </p>
            <p className="leading-6 text-black md:leading-8 mb-7">
              My journey in the world of visual storytelling began with a deep
              love for crafting narratives that resonate with the human
              experiences. I believe stories have the power to inspire, connect
              and transform, and I'm dedicated to bringing them to life through
              the lens of my camera. When I am representing a brand or an
              athlete, I am crafting negotiations, endorsement and advertisement
              deals, public appearances & new opportunities for their brand
              growth of their financial investments.
            </p>
            <p className="mb-12 leading-6 text-black md:leading-8">
              Thank you for joining me on this storytelling journey. Let's
              create, connect, and make magic together.
            </p>
            {/* <p className="mb-10 leading-6 md:mb-14 md:leading-8">
              Curated compilation of my best work, worked on more than 100
              projects till now. Leading to the greater work in the next future
            </p>
            <div className="border-b-[1.6px] border-solid border-dark-grey">
              <div className="mb-8 md:mb-12 [&>iframe]aspect-video ">
                <VideoIframe videoId="QD4XlsyHZl8" />
              </div>
            </div>
            <div className="mb-7">
              <h2 className="font-bold leading-relaxed text-xl-28">
                My Clients
              </h2>
              <p className="leading-6 md:leading-8">
                Google, Amazon, Facebook, etc...
              </p>
            </div> */}

            <div className="text-lg font-bold">
              <h3 className="mt-6 text-black font-bristone md:text-xl">My Work</h3>
              <div className="flex justify-between my-5 -mx-2 max-md:flex-col max-md:gap-2 max-md:text-base">
                <Link className="px-2" href="/work/film">Film Director</Link>
                <Link className="px-2" href="/work/sports">Athlete Representation</Link>
                <Link className="px-2" href="/work/executive">Executive Assistant </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {fetchedData ? (
        <div className="flex flex-wrap -mx-2 md:-mx-5">
          {fetchedData.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </div>
      ) : (
        <Loading />
      )} */}
    </>
  );
};

export default Home;

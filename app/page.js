"use client";

import VideoIframe from "@/components/YouTube";
import React from "react";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";

const Home = () => {
  const [fetchedData, setFetchedData] = useState("");

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
            <h1 className="mb-4 font-extrabold leading-none text-xl-40 md:leading-normal md:text-xl-42">
              My Work
            </h1>
            <p className="mb-10 leading-6 md:mb-14 md:leading-8">
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
            </div>
          </div>
        </div>
      </div>
      {fetchedData ? (
        <div className="flex flex-wrap -mx-2 md:-mx-5">
          {fetchedData.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;

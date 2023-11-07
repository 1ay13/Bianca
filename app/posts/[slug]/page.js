"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";

const page = ({ params }) => {
  const { slug } = params;
  // const router = useRouter();

  const [fetchedData, setFetchedData] = useState("");

  const fetchPost = async () => {
    const response = await fetch(`/api/blog/${slug}`);
    const data = await response.json();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  const desc =
    fetchedData.posts?.[0].fields.description.content?.[0].content?.[0].value;

  return (
    <>
      {fetchedData ?
        <>
          <h1 className="mb-6 font-extrabold md:mb-10 text-xl-26 md:text-xl-28">{fetchedData.posts?.[0].fields.title}</h1>
          {desc && <p className="mb-7 md:mb-9"><span className="block font-bold">Description:</span>{desc}</p>}
          <div className="mb-7 md:mb-9">
            <iframe
              src={fetchedData.posts?.[0].fields.video}
              frameBorder="0"
              className="w-full aspect-video"
            ></iframe>
          </div>
          {fetchedData.posts?.[0].fields.images &&
            <div >
              <Image />
            </div>
          }
          {/* Multiple Image Div
        <div className="flex flex-wrap -mx-1 mb-7">
          <Image
            loader={imageLoader}
            src="../assets/all-in-one.jpg"
            width={1534}
            height={865}
            alt="All in one Image"
            className="object-cover md:w-[calc(33.3%-8px)] w-[calc(50%-8px)] h-full aspect-video m-1"
          />
        </div> */}
        </> :
        <Loading />}
    </>
  );
};

export default page;

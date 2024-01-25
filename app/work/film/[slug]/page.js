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
      {fetchedData ? (
        <>
          <h1 className="mb-4 text-2xl font-extrabold md:text-xl-28">
            {fetchedData.posts?.[0].fields.title}
          </h1>
          {desc && (
            <p className="mb-7 md:mb-9">
              <span className="block font-bold">Description:</span>
              {desc}
            </p>
          )}
          <div className="mb-7 md:mb-9">
            <iframe
              src={fetchedData.posts?.[0].fields.video}
              frameBorder="0"
              className="w-full aspect-video"
            ></iframe>
          </div>
          {fetchedData.posts?.[0].fields.images && (
            <div>
              <Image />
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default page;

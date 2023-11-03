"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

  const desc =
    fetchedData.posts?.[0].fields.description.content?.[0].content?.[0].value;

  return (
    <div>
      <h1>{fetchedData.posts?.[0].fields.title}</h1>
      <p>{desc}</p>
      <iframe
        src={fetchedData.posts?.[0].fields.video}
        frameBorder="0"
      ></iframe>
      {fetchedData.posts?.[0].fields.images && <Image />}

      <h1></h1>
      <p></p>
    </div>
  );
};

export default page;

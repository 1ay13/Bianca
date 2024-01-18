"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";

const Work = () => {
  // Define a state variable to store the fetched data
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

export default Work;

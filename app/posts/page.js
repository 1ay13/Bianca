"use client";

import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Image from "next/image";

const Work = () => {
  // Define a state variable to store the fetched data
  const [fetchedData, setFetchedData] = useState('');

  const fetchPost = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();
    setFetchedData(data.posts); // Update the state with the fetched data
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      {fetchedData ?
        <div className="flex flex-wrap justify-between">
            {fetchedData.map((post) => (
          <PostCard key={post.fields.slug} post={post} />
          ))}
        </div> :
        <div className="h-[calc(100vh-250px)] flex justify-center items-center">
           <Image
            loader={imageLoader}
            src="../../assets/loading.gif"
            className='h-full max-h-[60px] w-fit'
            width={1534}
            height={865}
            alt="Picture of the author"
          />
        </div>}
    </>
  );
};

export default Work;

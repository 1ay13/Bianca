"use client";

import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

const Work = () => {
  // Define a state variable to store the fetched data
  const [fetchedData, setFetchedData] = useState(null);

  const fetchPost = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();
    setFetchedData(data.posts); // Update the state with the fetched data
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {fetchedData &&
            fetchedData.map((post) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          {/* {fetchedData && console.log(fetchedData)} */}
        </ul>
      </div>
    </section>
  );
};

export default Work;

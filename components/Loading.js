"use client";

import React from "react";
import Image from "next/image";

const imageLoader = ({ src }) => {
  return `${src}`;
};

const Loading = () => {
  return (
    <div className="h-[calc(100vh-250px)] flex justify-center items-center">
          <Image
            loader={imageLoader}
            src="../assets/loading.gif"
            className='h-full max-h-[60px] w-fit'
            unoptimized={true}
            width={200}
            height={200}
            alt="Picture of the author"
          />
    </div>
  );
};

export default Loading;

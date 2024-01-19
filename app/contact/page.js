"use client";
import Image from "next/image";

const contact = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-snug mb-7 md:mb-10 text-xl-28 max-md:text-center md:text-xl-40">
        Contact
      </h1>
      <div className="mb-12 md:mb-16 shadow-common">
        <Image
          loader={imageLoader}
          unoptimized={true}
          priority={false}
          src="assets/main.jpg"
          width={1534}
          height={865}
          alt="All in one Image"
        />
      </div>
      <p className="leading-6 text-black md:leading-8 mb-7">
        I'm consistently brimming with excitement when it comes to engaging with
        fellow industry experts. Whether it's diving into conversations about
        fresh projects, exploring the nuances of grading and cinematography, or
        just having a friendly chat, I'm always eager to connect with new faces.
        Don't hesitate to reach out if you're interested in my services,
        including SDR Color Grading, Beauty Retouching, and Show LUT
        Development.
      </p>
      <p className="underline mb-7 md:mb-12 underline-offset-2">
        <a target="_blank" href="assets/Resume.pdf">
          Download resume
        </a>
      </p>
      <p className="mb-8 leading-6 text-black md:leading-8 md:mb-12">
        You can also access my resume for more details. Please feel free to use
        any of the provided contact options to explore potential collaborative
        ventures or discuss any work-related matters.
      </p>
      <div className="flex mb-12 -mx-5 leading-7 text-black max-md:gap-7 max-md:flex-col">
        {/* <div className="w-full px-5 md:w-1/3">
          <p>Email me at:</p>
          <strong className="underline underline-offset-2">
            <a href="#">bs_ramirez@icloud.comm</a>
          </strong>
        </div> */}
      </div>
    </div>
  );
};

export default contact;

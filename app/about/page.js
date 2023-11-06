"use client";
import Image from "next/image";

const about = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-none mb-7 md:mb-10 text-xl-40 md:leading-normal md:text-xl-42">
        About
      </h1>
      <div className="mb-12 md:mb-16 shadow-common">
        <Image
          loader={imageLoader}
          src="assets/B book -4.jpg"
          width={1534}
          height={865}
          alt="Picture of the author"
        />
      </div>
      <p className="leading-6 text-black md:leading-8 mb-7">
        Hello, I'm Bianca Rami, a passionate storyteller, director, writer, and
        cinematographer. My journey in the world of visual storytelling began
        with a deep love for crafting narratives that resonate with the human
        experience. I believe that stories have the power to inspire, connect,
        and transform, and I'm dedicated to bringing them to life through the
        lens of my camera.
      </p>
      <p className="leading-6 text-black md:leading-8 mb-7">
        With a background in writing and a keen eye for cinematography, I
        specialize in creating immersive and emotionally compelling narratives.
        Whether it's capturing the raw emotions of a character on screen,
        crafting a captivating script, or directing a scene to perfection, I
        thrive on the creative process and the magic that unfolds during
        production.
      </p>
      <p className="leading-6 text-black md:leading-8 mb-7">
        My work is a reflection of my commitment to exploring the intricacies of
        the human condition, and I'm dedicated to bringing authenticity and
        depth to every project I undertake. From short films to documentaries, I
        aim to evoke thought, stir emotions, and leave a lasting impact on the
        audience.
      </p>
      <p className="leading-6 text-black md:leading-8 mb-7">
        When I'm not behind the camera or immersed in my writing, you'll find me
        constantly seeking inspiration from the world around me. I believe in
        the power of continuous learning and growth, always pushing the
        boundaries of my craft to deliver stories that leave a lasting
        impression.
      </p>
      <p className="underline mb-7 md:mb-12 underline-offset-2">
        <a target="_blank" href="assets/Resume.pdf">Download resume</a>
      </p>
      <p className="mb-12 leading-6 text-black md:leading-8">
        Thank you for joining me on this storytelling journey. Let's create,
        connect, and make magic together.
      </p>
    </div>
  );
};

export default about;

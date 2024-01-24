"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === `Write Your ${name.replace("_", " ")}` ? "" : value,
    });
  };

  const [result, setResult] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uhv0fpu",
        "template_4jhmk8c",
        form.current,
        "PQGuYeqiQ6CscpTGH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(
            "Thank You for your message, Bianca will get back to you soon."
          );
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setResult("Please try back after sometime, there was an error.");
        }
      );
  };

  return (
    <div className="pb-8 md:pb-10">
      <h1 className="font-extrabold leading-snug mb-7 md:mb-10 text-xl-28 max-md:text-center md:text-xl-40">
        Let's Connect
      </h1>
      <div className="mb-12 md:mb-20">
        <p className="text-center">
          Contact me for business inquiries, freelance projects & branding
          proposals.
        </p>
      </div>
      <div className="">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid p-12 gap-8 grid-cols-1 border-gray-200 border-2"
        >
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="block border-black border-b-2 pb-5"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="block border-black border-b-2 pb-5"
            placeholder="Enter Your Email Address"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="block border-black border-b-2 pb-5"
            placeholder="Message"
          />
          <input type="submit" value="Send" />
        </form>
        <p className="mt-6">{result}</p>
      </div>

      <h3 className="font-extrabold leading-snug mb-7 md:mb-10 text-xl-28 max-md:text-center md:text-xl-40">
        For Purchase
      </h3>

      <div className="flex gap-x-4">
        <Link
          href="https://www.amazon.com/Beyond-Words-Memoir-Bianca-Ramirez/dp/1481753630?nodl=1&dplnkId=65bca13e-249b-4b58-a910-4783e9bbe53c"
          passHref={true}
        >
          <div>
            <div className="object-cover ">
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/book_cover.jpg"
                width={360}
                height={900}
                alt="Picture of the author"
                className="object-fill "
              />
            </div>
            <h3 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
              B BEYOND WORDS
            </h3>
          </div>
        </Link>
        <Link href="https://www.femketewari.com/book" passHref={true}>
          <div>
            <div className="object-cover ">
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/Miami_book.jpg"
                width={360}
                height={900}
                alt="Picture of the author"
                className="object-fill w-full max-w-[360px] h-full"
              />
            </div>
            <h3 className="mt-3 px-2.5 text-center font-semibold leading-normal text-sm md:text-base">
              MIAMI WOMEN
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default contact;

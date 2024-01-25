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
      <h1 className="mb-4 font-extrabold leading-snug text-xl-28 max-md:text-center md:text-xl-40">
        Let's Connect
      </h1>
      <div className="mb-12">
        <p className="max-md:text-center">
          Contact me for business inquiries, freelance projects & branding
          proposals.
        </p>
      </div>
      <div className="mb-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 border-2 border-gray-200 p-7 md:p-10 gap-7 rounded-xl"
        >
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="block pb-3 text-sm border-b border-black md:text-base md:pb-4"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="block pb-3 text-sm border-b border-black md:text-base md:pb-4"
            placeholder="Enter Your Email Address"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="block pb-3 text-sm border-b border-black md:text-base md:pb-4"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="cursor-pointer p-1 text-base font-bold tracking-wide uppercase border border-solid w-full md:w-[200px] mx-auto"/>
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
          className="flex flex-col justify-between"
        >
          <div className="h-full">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/book_cover.jpg"
              width={360}
              height={900}
              alt="Picture of the author"
              className="object-cover h-full"
            />
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-normal text-center md:text-base">
            B BEYOND WORDS
          </h3>
        </Link>
        <Link href="https://www.femketewari.com/book" passHref={true} className="flex flex-col justify-between">
          <div className="h-full">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/Miami_book.jpg"
              width={360}
              height={900}
              alt="Picture of the author"
              className="object-cover h-full"
            />
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-normal text-center md:text-base">
            MIAMI WOMEN
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default contact;

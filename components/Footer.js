import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaImdb, FaLinkedin, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sticky -bottom-[1px] block w-full py-4 mt-auto text-white bg-black md:flex">
      <div className="flex flex-wrap items-center justify-between w-full gap-2 px-5 mx-auto max-w-custom-screen">
        <p className="w-full text-center sm:w-auto">
          <a href="#">bynd@biancarami.com</a>
        </p>
        <div className="flex items-center justify-center w-full gap-3 sm:w-auto">
          <a href="https://www.instagram.com/biancavidale/ " target="_blank">
            <AiFillInstagram size="1.5rem" />
          </a>
          <a href="https://www.youtube.com/@BiancaRami" target="_blank">
            <AiFillYoutube size="1.5rem" />
          </a>
          <a href="https://www.imdb.com/name/nm3779168/" target="_blank">
            <FaImdb size="1.5rem" />
          </a>
          <a href="https://www.linkedin.com/in/bianca-ramirez-b97796ab/" target="_blank">
            <FaLinkedin size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

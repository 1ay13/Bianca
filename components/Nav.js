"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed top-0 z-10 w-full px-5 mb-10 bg-white">
      <nav className="w-full mx-auto max-w-[1016px] flex items-center justify-between gap-5 py-3 md:py-5 border-b-[1.6px] border-solid border-dark-grey">
        <div className="flex justify-between w-full gap-5 md:gap-0 md:w-auto">
          <div className="flex items-center hover:drop-shadow-md">
            <FontAwesomeIcon
              icon={faBars}
              className="text-xl cursor-pointer md:hidden"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          </div>
          <div>
            <p className="text-xl font-extrabold text-right md:text-left md:text-3xl">
              BIANCA RAMI
            </p>
            <p className="-mt-2.5 md:-mt-1.5 font-semibold text-right md:text-left">
              Film Director • Writer • Author• Designer
            </p>
          </div>
        </div>

        <div
          className={`${
            toggleMenu ? "max-md:translate-x-0" : "max-md:-translate-x-full"
          } max-md:fixed max-md:flex max-md:top-0 max-md:left-0 max-md:w-full max-md:bottom-0 max-md:bg-menu-bg max-md:flex-col max-md:text-white max-md:text-xl-22 max-md:pt-20 max-md:pl-10 max-md:pr-10 max-md::gap-6 max-md:font-bold hidden md:text-base md:font-medium md:flex gap-7 transition-transform ease-in-out duration-500`}
        >
          {/* <Link
            end="true"
            href="/"
            className={pathname == "/" ? "text-active-nav" : ""}
            onClick={() => setToggleMenu(false)}
          >
            ShowReel{" "}
          </Link> */}
          <Link
            href="/posts"
            className={pathname == "/posts" ? "text-active-nav" : ""}
            onClick={() => setToggleMenu(false)}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={pathname == "/about" ? "text-active-nav" : ""}
            onClick={() => setToggleMenu(false)}
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className={pathname == "/contact" ? "text-active-nav" : ""}
            onClick={() => setToggleMenu(false)}
          >
            Contact
          </Link>
          <span
            className="text-4xl top-5 right-5 md:hidden max-md:absolute"
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

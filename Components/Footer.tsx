import React from "react";
import { footerMainLinks, footerSubLinks } from "@/constants/constants";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="  bg-black px-3 text-sm py-10 lg:px-14 md:px-8 font-Oswald">
      <div className="flex justify-between ">
        <div className="flex  gap-16 flex-wrap">
          <div className="flex flex-col  font-semibold gap-y-2">
            {footerMainLinks.map((mainLink) => (
              <Link
                className="text-white"
                key={mainLink.title}
                href={mainLink.link}
              >
                {mainLink.title}
              </Link>
            ))}
          </div>
          <div className="text-white flex gap-9">
            {footerSubLinks.map((sublink) => (
              <div>
                <p className=" font-semibold mb-2">{sublink.linkTitle}</p>
                <ul>
                  {sublink.subLinks.map((link) => (
                    <li className=" text-xs text-[#7e7e7e]">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex gap-4   text-3xl text-white">
          <AiFillTwitterCircle className="text-4xl" />
          <BsFacebook />
          <AiFillYoutube />
          <AiFillInstagram />
        </div>
      </div>

    </footer>
  );
};

export default Footer;

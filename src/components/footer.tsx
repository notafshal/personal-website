import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="w-full absolute bottom-0">
      <p className="mx-auto text-3xl flex p-10 z-10 justify-center gap-5">
        <FaInstagram className=" hover:cursor-pointer" />
        <FaXTwitter className=" hover:cursor-pointer" />
        <FaLinkedin className=" hover:cursor-pointer" />
        <FaGithub className=" hover:cursor-pointer" />
      </p>
    </footer>
  );
}

export default Footer;

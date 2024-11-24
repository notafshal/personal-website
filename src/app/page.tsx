import Link from "next/link";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillHexagonFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="mx-2">
          <BsFillHexagonFill className="text-5xl relative" />
          <div className="text-white text-lg absolute top-3 left-[25px] z-100">
            A
          </div>
        </div>
        <div className="my-3 mx-3">
          <ul className="flex gap-5 font-bold">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="text-center  my-32 ">
        <div>
          <div className=" bg-yellow-300 rounded-r-xl w-96 h-5 mx-auto relative">
            <div className="text-8xl">Afshal</div>
          </div>
        </div>
      </div>
    </>
  );
}

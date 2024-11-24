import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillHexagonFill } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-300 h-screen ">
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
      <div className="text-center  my-28 ">
        <div>
          <div className=" bg-yellow-300 rounded-r-xl w-96 h-5 mx-auto relative">
            <div className="text-8xl">Afshal</div>
          </div>
        </div>
      </div>
      <div className="w-screen grid grid-cols-3 mx-32">
        <div>
          <p className="my-5 mx-6 text-lg font-semibold"> Get in touch </p>
          <p className="flex gap-6 text-2xl">
            <FaInstagram className=" hover:cursor-pointer" />
            <FaXTwitter className=" hover:cursor-pointer" />
            <FaLinkedin className=" hover:cursor-pointer" />
            <FaGithub className=" hover:cursor-pointer" />
          </p>
        </div>

        <div>
          <Image
            src="/assets/pfp.jpg"
            alt="pfp"
            width={300}
            height={300}
            className="rounded-full border-3"
          />
        </div>
        <div>
          <p className="font-semibold text-lg my-2">Full Stack developer</p>
          <p className="font-extralight text-sm">
            I build accessible, pixel-perfect <br />
            digital experiences for the web.
          </p>
        </div>
      </div>
      <div className="flex justify-between mx-32">
        <div className="flex gap-4">
          <button className="bg-yellow-300 p-2 rounded-xl border-2 border-black hover:text-lg">
            Learn more
          </button>
          <button className="bg-white p-2 border-2 rounded-xl border-black hover:text-lg">
            Hire me
          </button>
        </div>
        <button className="bg-black text-white  p-2 border-2 rounded-xl hover:text-lg">
          Contact Me
        </button>
      </div>
    </div>
  );
}

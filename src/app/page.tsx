import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-300 h-screen ">
      <div className="text-center my-28 ">
        <div>
          <div className="bg-yellow-300 rounded-r-xl w-96 h-5 mx-auto relative">
            <div className="text-8xl">Afshal</div>
          </div>
        </div>
      </div>
      <div className="w-screen grid grid-cols-3 mx-32">
        <div>
          <p className="my-5 mx-6 text-lg font-semibold"> Get in touch </p>
          <p className="flex gap-6 text-2xl">
            <FaInstagram className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" />
            <FaXTwitter className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" />
            <FaLinkedin className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" />
            <FaGithub className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" />
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
          <button className="bg-yellow-300 p-2 rounded-xl border-2 border-black transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110">
            Learn more
          </button>
          <button className="bg-white p-2 border-2 rounded-xl border-black transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110">
            Hire me
          </button>
        </div>
        <button className="bg-black text-white  p-2 border-2 rounded-xl transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110">
          Contact Me
        </button>
      </div>
    </div>
  );
}

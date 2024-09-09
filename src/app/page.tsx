import Link from "next/link";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className=" text-lg bg-sky-950 h-screen text-white flex flex-row ">
        <div className=" flex-col mx-10 ">
          <div className="text-start mt-5">
            <h1 className="text-2xl font-semibold">Afshal Maharjan</h1>
            <p>FullStack Web Developer</p>
            <p className="font-light text-sm text-slate-400">
              I build pixel-perfect, enganging, and accessible digital
              experiences.
            </p>
          </div>
          <div className="my-4">
            <ul className="flex flex-row gap-6">
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h1>ABOUT</h1>
            <div className="flex flex-col gap-4 text-slate-400">
              <p className="text-sm">
                Hello, I&apos;m Afshal Maharjan, a dedicated full stack
                developer. I am passionate about creating cutting-edge digital
                solutions and have gained extensive experience in both{" "}
                <span className="text-white">frontend </span>
                and <span className="text-white">backend</span> development
                throughout my career.
              </p>
              <p className="text-sm">
                When I&apos;m not at the computer I&apos;m usually watching
                anime, Aquascaping, reading or hanging out with my family or
                friends
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1>EXPERIENCES</h1>
            <div className="mt-4 flex flex-col gap-1">
              <Link href="https://solutiononenepal.com/" target="blank">
                <h1 className="text-base border-b-2 border-transparent hover:border-white flex flex-row">
                  <p>Solutions One pvt.Ltd</p>
                  <FaArrowRight className="mt-1 mx-1" />
                </h1>
              </Link>
              <h3 className="text-xs font-extralight text-slate-400">
                Frontend developer Intern
              </h3>
              <h3 className="text-xs font-extralight text-slate-400">
                July2023 -- Sept2023
              </h3>
              <p className="text-sm font-light">
                Build and maintain components used in Solutions One frontend,
                across the whole product. Work together with cross-functional,
                including backend developers and designers, to implement and
                advocate for best practices in web development.
              </p>
              <div>
                <ul className="flex flex-row gap-2 text-xs font-extralight">
                  <li className="bg-green-400 bg-opacity-30 text-green-400 p-1 rounded-xl">
                    JavaScript
                  </li>
                  <li className="bg-green-400 bg-opacity-30 text-green-400 p-1 rounded-xl">
                    ReactJs
                  </li>
                  <li className="bg-green-400 bg-opacity-30 text-green-400 p-1 rounded-xl">
                    Tailwind
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="/assets/pdfs/CV_Afshal_Maharjan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="mt-4 text-base flex flex-row">
                <span> View Full Resume </span>
                <FaArrowRight className="mt-1 mx-1 size-4" />
              </h1>
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-1">
            <h1>PROJECTS</h1>
            <Link href="https://fishshoolnepal.netlify.app/" target="blank">
              <h1 className="text-base flex flex-row">
                <span> Build a Landing page for fishSchoool Nepal</span>
                <FaArrowRight className="mt-1 mx-1 size-4" />
              </h1>
            </Link>
            <p className="text-slate-300 text-xs">
              A landing page for a local ornamental fish store in kirtipur.View
              the page for the shop information. Including a map to Fish School
              Nepal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

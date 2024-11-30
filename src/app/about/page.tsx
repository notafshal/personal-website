import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-gray-300 h-screen">
        <div className="my-10 mx-10 ">
          <h1 className="text-6xl  font-bold underline ">About Me</h1>
          <div className="grid grid-cols-2">
            <div>
              <h5 className="my-4 text-md font-extralight">Hello I&apos;m </h5>
              <h3 className="text-4xl ">Afshal Maharjan</h3>
              <h5 className="text-md font-extralight">Software Engineer</h5>

              <p className="font-semibold bg-white p-4 border-2 border-black rounded-xl my-2">
                {" "}
                As a seasoned full-stack web developer, I specialize in crafting
                dynamic digital experiences in both frontend and backend. I
                bring a holistic approach to every project. From responsive
                designs to seamless functionality, I strive to create web
                solutions that not only meet but exceed expectations. Dive in to
                explore my diverse range of projects and see how I can bring
                your ideas to life in the digital realm.xxx
              </p>
              <div className="font-semibold bg-white p-4 border-2 border-black rounded-xl my-2">
                {" "}
                <h1 className="text-center p-1 rounded-full">Education</h1>
                <div className="grid grid-cols-3">
                  <p>
                    <h2>Creative Academy</h2>
                    <h3 className="font-light">SLC - 2016</h3>
                  </p>
                  <p>
                    <h2>BlueBird College</h2>
                    <h3 className="font-light">NEB - 2018</h3>
                  </p>
                  <p>
                    <h2>Sagarmatha College of Science and Technology</h2>
                    <h3 className="font-light">Bsc.CSIT - 2023</h3>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                className="mx-32 rounded-full shadow-lg shadow-slate-600 "
                src="/assets/pfp.jpg"
                alt="About me photo"
                width="300"
                height="300"
              />
              <button className="mx-72 z-10 font-bold my-12 bg-orange-500 p-2 rounded-xl border-2  border-black transition ease-in-out delay-150 duration-300 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

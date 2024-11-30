import React from "react";

function Contact() {
  return (
    <div className="">
      <h1 className="text-center underline font-semibold text-6xl my-6">
        Contact me
      </h1>
      <div className=" bg-beige border-2 border-black grid grid-cols-2 p-10 gap-5 mx-28 mt-14 justify-center">
        <div>
          <form>
            <div className="flex flex-col gap-5">
              <label className="text-lg font-semibold">Full name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-beige border-b-2 font-light border-black mr-56 focus:outline-none"
              />
              <label className="text-lg font-semibold">Email</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-beige border-b-2 font-light border-black mr-56 focus:outline-none"
              />
              <label className="text-lg font-semibold">Your email</label>
              <input
                type="text"
                placeholder="Your feedback or query"
                className="bg-beige border-b-2 font-light border-black mr-56 focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Contact details</h1>
            <p className="my-3">afshal56@gmail.com</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Based in</h1>
            <p className="my-3">Kirtipur, Kathmandu, Nepal</p>
            <button className="my-6 px-5 p-2 bg-black text-white rounded-full transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

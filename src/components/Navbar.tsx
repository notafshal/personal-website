import Image from "next/image";
import pfp from "@/assets/pfp.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between p-4 w-full h-20 bg-slate-700  sticky z-10">
        <div className="flex flex-row gap-3 mx-5">
          <div className="">
            <Image
              src={pfp}
              alt="pfp"
              className="rounded-full w-12 h-12 hover:w-20 hover:h-20 cursor-pointer transition-all "
            />
          </div>
        </div>
        <div className="mx-5 my-2">
          <ul className="flex flex-row gap-8 text-lg font-semibold text-white">
            <li className="border-b-4 border-transparent hover:border-purple-500 cursor-pointer transition duration-150 hover:text-purple-500">
              HOME
            </li>
            <li className="border-b-4 border-transparent hover:border-purple-500 cursor-pointer transition duration-150 hover:text-purple-500">
              ABOUT
            </li>
            <li className="border-b-4 border-transparent hover:border-purple-500 cursor-pointer transition duration-150 hover:text-purple-500">
              PROJECTS
            </li>
            <li className="border-b-4 border-transparent hover:border-purple-500 cursor-pointer transition duration-150 hover:text-purple-500">
              CONTACT
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

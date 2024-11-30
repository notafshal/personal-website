import Link from "next/link";
import { BsFillHexagonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div className="mx-2">
          <BsFillHexagonFill className="text-5xl relative" />
          <div className="text-white text-lg absolute top-2 left-[25px] z-100">
            A
          </div>
        </div>
        <div className="my-3 mx-3">
          <div className="flex gap-5 font-bold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

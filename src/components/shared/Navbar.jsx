import Divider from "./Divider";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex px-10 py-5 justify-between items-center">
        <div className="w-fit flex gap-x-10 items-center">
          <Link href="/">
            <div className="flex items-center gap-x-3">
              <div className="w-7 h-7 bg-pink rounded-full"></div>
              <div className="text-xl font-bold">Prod. Kayks</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-x-5">
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/releases">Releases</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="w-fit flex gap-x-3 items-center">
          <Link href="#" className="hidden">
            Sign up
          </Link>
          <Link href="/beats">
            <button className="bg-pink rounded-md py-2 px-3">All Beats</button>
          </Link>
          <button className="block md:hidden p-2 rounded-lg border-2 duration-300 border-transparent hover:border-red-300">
            <i class="relative top-[2px] fi fi-ts-bars-staggered"></i>
          </button>
        </div>
      </div>
      <Divider />
    </>
  );
}

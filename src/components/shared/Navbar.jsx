"use client";
import Divider from "./Divider";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(true);

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
          <div className={`fixed md:static z-50 md:z-1 bg-purple-dark-2 md:bg-transparent w-full md:w-fit top-0 ${sidebarIsVisible ? 'left-0' : '-left-full'} p-5 md:p-0 block md:flex items-center gap-x-5`}>
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => setSidebarIsVisible(false)}
            >
              <i className="fi fi-tr-circle-xmark"></i>
            </div>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/search">Search</Link>
            </div>
            <div>
              <Link href="/releases">Releases</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="w-fit flex gap-x-3 items-center">
          <Link href="#" className="hidden">
            Sign up
          </Link>
          <Link href="/beats">
            <button className="bg-pink rounded-md py-2 px-3">All Beats</button>
          </Link>
          <button
            onClick={() => setSidebarIsVisible(true)}
            className="block md:hidden p-2 rounded-lg border-2 duration-300 border-transparent hover:border-red-300"
          >
            <i className="relative top-[2px] fi fi-ts-bars-staggered"></i>
          </button>
        </div>
      </div>
      <Divider />
    </>
  );
}

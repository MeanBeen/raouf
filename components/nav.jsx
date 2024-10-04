"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-white p-8 shadow-md md:justify-evenly">
      <Link href={"/"}>
        <Image
          width={120}
          height={120}
          alt="logo"
          src={
            "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75"
          }
        />
      </Link>

      <div className={`flex gap-5 text-lg`}>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/furniture"}
        >
          FURNITURE
        </Link>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/electronic"}
        >
          ELECTRONICS
        </Link>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/lamp"}
        >
          LAMP
        </Link>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/kitchen"}
        >
          KITCHEN
        </Link>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/chair"}
        >
          CHAIR
        </Link>
        <Link
          className="hidden hover:underline md:block"
          href={"/container/skincare"}
        >
          SKINCARE
        </Link>
        <button className="">🛒</button>

        <button className="block md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Full-Screen Sliding Menu */}
      <div
        className={`fixed inset-0 z-50 flex transform flex-col items-center justify-center bg-[#e5e5e5] p-8 transition-transform duration-500 ease-in-out ${isMenuVisible ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <button
          onClick={toggleMenu}
          className="hover:text-custom-orange absolute right-10 top-10 text-3xl transition-all duration-300 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 text-2xl font-medium">
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/furniture"
            >
              Furniture
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/electronic"
            >
              Electronic
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/lamp"
            >
              Lamp
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/kitchen"
            >
              Kitchen
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/chair"
            >
              Chair
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="uppercase"
              href="/container/skincare"
            >
              Skincare
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

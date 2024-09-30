"use client";

import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  // State to track whether the menu is visible on small screens
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <header className="flex items-center justify-evenly p-8 shadow-md">
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

      {/* Menu links: visible on medium screens and larger, or when toggled on small screens */}
      <div className={`space-x-5 text-lg md:block hidden`}>
        <Link className="hover:underline" href={"/container/furniture"}>
          FURNITURE
        </Link>
        <Link className="hover:underline" href={"/container/electronic"}>
          ELECTRONICS
        </Link>
        <Link className="hover:underline" href={"/container/lamp"}>
          LAMP
        </Link>
        <Link className="hover:underline" href={"/container/kitchen"}>
          KITCHEN
        </Link>
        <Link className="hover:underline" href={"/container/chair"}>
          CHAIR
        </Link>
        <Link className="hover:underline" href={"/container/skincare"}>
          SKINCARE
        </Link>
        <button>🛒</button>
      </div>
      {/* Menu button visible on small screens */}
      <button className="block md:hidden text-xl" onClick={toggleMenu}>
        ☰
      </button>
      <nav
        className={`fixed ${isMenuVisible ? "block " : "hidden"} inset-y-0 right-0 bg-[#e5e5e5] left-0 z-50 transition-all duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
      >
        <button
          onClick={toggleMenu}
          className="text-3xl absolute top-10 right-10 hover:text-custom-orange transition-all duration-300 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </button>
        <ul class="flex flex-col items-center gap-8 font-medium text-2xl">
          <li>
            <Link class="uppercase" href="/container/furniture">
              Furniture
            </Link>
          </li>
          <li>
            <Link class="uppercase" href="/container/electronic">
              Electronic
            </Link>
          </li>
          <li>
            <Link class="uppercase" href="/container/lamp">
              Lamp
            </Link>
          </li>
          <li>
            <Link class="uppercase" href="/container/kitchen">
              Kitchen
            </Link>
          </li>
          <li>
            <Link class="uppercase" href="/container/chair">
              Chair
            </Link>
          </li>
          <li>
            <Link class="uppercase" href="/container/skincare">
              Skincare
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

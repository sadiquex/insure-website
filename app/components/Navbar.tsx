"use client";
import { CloseIcon, HamburgerIcon, Logo } from "./Assets";
import { useRef, useState } from "react";
import MobileNav from "./MobileNav";
import { useAnimate, stagger, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Function to toggle mobile nav and update body overflow
  const toggleMobileNav = () => {
    setIsOpen(!isOpen);

    // Toggle body overflow based on nav state
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav className="md:w-[85vw] max-w-[1440px] md:mx-auto md:px-0 py-4 bg-white text-xl ">
      <nav className="px-3 flex justify-between items-center">
        {/* logo */}
        <div className="flex-1">
          <Logo />
        </div>
        {/* ul */}
        <ul className="text-16 hidden md:flex uppercase gap-[30px] text-dark-grayish-violet font-semibold justify-between cursor-pointer">
          <li>HOW WE WORK</li>
          <li>BLOG</li>
          <li>ACCOUNT</li>
          <li className="border-2 text-black hover:bg-black hover:text-white">
            VIEW PLAN
          </li>
        </ul>
        {/* hamburger */}
        <button className="flex md:hidden" onClick={toggleMobileNav}>
          {!isOpen && <HamburgerIcon />}
          {isOpen && <CloseIcon />}
        </button>
      </nav>
      {isOpen && <MobileNav toggleMobileNav={toggleMobileNav} />}
    </nav>
  );
}

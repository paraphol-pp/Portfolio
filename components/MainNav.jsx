import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdArrowOutward } from 'react-icons/md'
import Link from "next/link";
        

const MainNav = () => {
  return (
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center gap-50">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />

        <Link href="/contact" className="block md:hidden">
          <button className="btn btn-lg btn-tertiary mb-16">
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default MainNav;
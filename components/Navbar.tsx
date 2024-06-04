"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden flex items-center">
        <Image 
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col items-center py-5">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full text-center border-b">
                <Link href={link.href} className="block w-full py-3 regular-16 text-gray-800 cursor-pointer transition-all hover:bg-gray-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

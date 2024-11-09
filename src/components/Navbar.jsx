import React from "react";
import headerLogo from "../assets/kevinRushLogo.png";
import {
  FaSquareXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-0 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={headerLogo} alt="logo" /> */}
        <p>ST</p>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;

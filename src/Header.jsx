import React from "react";
import { useState } from "react";
import { Logs } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <header className="w-100% flex justify-center p-1  ">
      <div className="container py-2 px-7 w-11/12 lg:w-10/12 m-2 lg:py-3 lg:px-14 flex justify-between items-center border border-black rounded-2xl shadow-2xl shadow-black/50 ">
        <img src="https://capp.nicepage.com/images/default-logo.png"></img>
        <nav className="hidden lg:flex gap-7 font-medium">
          <a className="hover:text-red-400 transtion duration-300">Home</a>
          <a className="hover:text-red-400 transtion duration-300">Contact</a>
          <a className="hover:text-red-400 transtion duration-300">Landing</a>
        </nav>

        <Logs className="flex lg:hidden" />
      </div>
    </header>
  );
}

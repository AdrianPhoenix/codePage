'use client'
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex items-center  justify-between border-b-2 border-secondary">
      <div className="flex items-center">
        <img src="/LOGO.png" alt="logo de code" className="h-[2rem] " />
        <span className="text-[1.2rem]">Code Solutions 11</span>
      </div>
      <ul className="w-[50%] flex justify-around ">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages/cursos">Cursos</Link></li>
        <li><Link href="#">Proyectos</Link></li>
        <li><Link href="#">Registrarse</Link></li>
        <li><Link href="#">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

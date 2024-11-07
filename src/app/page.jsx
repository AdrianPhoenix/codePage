import React from "react";
import { FaCircle } from "react-icons/fa";
import Nav from "@/components/Nav";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[url(/fondo-code.webp)] bg-no-repeat bg-cover bg-center bg-image pt-10 px-12 text-white grid grid-rows-[10vh,1fr]">
      
      <Nav />
      <div className="flex overflow-hidden">
        <section className="w-1/2">
          <p className=" text-[5rem] leading-[1] mt-12">Diseño web,</p>
          <p className=" text-[5rem] leading-[1]">programación web</p>
          <p className=" text-[5rem] leading-[1]">y conocimiento en</p>
          <p className=" text-[5rem] leading-[1]">un solo lugar</p>

          <h1 className="text-primary text-[2.5rem] ">Code Solutions</h1>

          <button className="flex items-center bg-primary py-2 pl-4 pr-12 rounded-full gap-2 mt-8 text-lg">
            {" "}
            <FaCircle color="white" />
            REGISTRATE
          </button>
        </section>
        <section className=" relative w-1/2 flex items-center justify-center">
          <img src="/LOGO.png" alt="logo de code" className="h-[70%] " />
          <img src="/linea-.png" alt="linea" 
            className="absolute top-[40%] left-[22%]"
          />
        </section>
      </div>

    </div>
  );
};

export default Home;

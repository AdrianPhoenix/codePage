'use client'
import Link from "next/link";
import { MdOutlineLaptopChromebook as Pc} from "react-icons/md";

const CardCurso = () => {
  return (
    <div className="w-[14rem] h-[20rem] bg-blue-950 rounded-3xl p-4">
      <img src="/image.png" alt="frontend image" className="h-[35%]" />
      <section className="w-full h-[65%] flex flex-col items-center justify-evenly">
        <span className="w-full  text-right text-sm flex items-center gap-2"><Pc size={25}/>Online - Presencial</span>
        <h3 className="text-xl">Desarrollo Web - FrontEnd</h3>
        <Link href='#' className="bg-secondary text-primary px-8 py-1 rounded-3xl">Ver Más</Link>
      </section>
    </div>
  );
};

export default CardCurso;

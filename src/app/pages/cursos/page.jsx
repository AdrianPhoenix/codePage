import CardCurso from "@/components/CardCurso";

const Cursos = () => {
  return (
    <div className="">
      <h1>Cursos</h1>
      <section className="flex items-center justify-evenly flex-wrap">
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
      </section>
    </div>
  );
};

export default Cursos;

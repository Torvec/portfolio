import Projects from "./home/Projects";

export default function Portfolio() {
  return (
    <>
      <h1 className="bg-stone-100 py-20 text-center text-5xl font-semibold uppercase md:text-8xl md:font-normal">
        My Portfolio
      </h1>
      <section className="bg-orange-500">
        <div className="container m-auto py-10 px-5 xl:px-0">
          <Projects />
        </div>
      </section>
    </>
  );
}

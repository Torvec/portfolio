import PortfolioProjects from "../components/PortfolioProjects";

function Portfolio() {
  return (
    <>
    <h1 className="py-20 text-center text-5xl font-semibold uppercase md:text-8xl md:font-normal bg-stone-100">
        My Portfolio
      </h1>
    <section className="bg-orange-500">
      <div className="container m-auto py-10 xl:px-0">
        <PortfolioProjects />
      </div>
    </section>
    </>
  );
}

export default Portfolio;

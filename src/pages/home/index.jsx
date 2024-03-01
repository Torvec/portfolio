// import { Link as RouterLink } from "react-router-dom";
// import EmblaCarousel from "./EmblaCarousel";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* CAROUSEL TEST */}
      {/* <section className="flex flex-col items-center bg-orange-500 pt-20">
        <h2 className="mb-10 text-4xl font-semibold uppercase md:text-6xl md:font-normal">
          Carousel Test
        </h2>
        <div className="container m-auto mb-10 px-5 xl:px-0">
          <EmblaCarousel />
        </div>
        <button className="mb-10 rounded-3xl border-2 border-stone-900 bg-stone-900 px-4 py-2 text-lg text-stone-50 transition-all duration-300 ease-in-out hover:rounded-full hover:border-stone-300 hover:bg-stone-700 hover:px-8">
          <RouterLink to={"/portfolio"}>All Projects</RouterLink>
        </button>
      </section> */}
    </>
  );
}
import { Link as RouterLink } from "react-router-dom";
import PortfolioProjects from "../components/PortfolioProjects";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center bg-stone-100 py-32">
        <div>
          <h1 className="transform-all text-6xl font-black uppercase text-stone-900 duration-300 ease-in-out hover:tracking-wider md:text-7xl lg:text-8xl">
            <span className="block">Edward</span>
            <span className="block">Vonschondorf</span>
          </h1>
          <h2 className="transform-all bg-orange-500 px-4 py-2 text-3xl font-bold uppercase text-stone-50 duration-300 ease-in-out hover:bg-stone-50 hover:tracking-wide hover:text-orange-500 md:text-4xl lg:text-8xl">
            <span className="block">Full Stack</span>
            <span className="block">Web Developer</span>
          </h2>
        </div>
      </section>
      {/* ABOUT ME SECTION */}
      <section className="m-auto py-20 sm:container md:w-3/4">
        <div className="flex flex-col gap-10 lg:flex-row">
          <img
            src="./assets/img/me.png"
            alt="Edward Von Schondorf"
            className="m-auto mb-10 h-96 w-96 rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="mb-5 text-center text-6xl uppercase md:text-left">
              About Me
            </h2>
            <p className="mb-5 px-5 text-lg md:px-0 md:text-2xl">
              Hi there! I am a full stack developer with a passion for creating
              beautiful and functional web applications. I have experience in
              working with various technologies, such as HTML, CSS, JavaScript,
              React, Node.js, MongoDB, and more. I enjoy learning new skills and
              exploring new challenges in the web development field.
            </p>
            <p className="mb-5 px-5 text-lg md:px-0 md:text-2xl">
              In this portfolio, you can find some of the projects that I have
              worked on, both individually and collaboratively. You can also
              learn more about me, my skills, and my interests. Feel free to{" "}
              <a href="mailto:me@edward-vonschondorf.dev" className="text-orange-500 hover:underline">contact me</a> if you
              have any questions or feedback. I am always open to new
              opportunities and collaborations. Thank you for visiting my
              website!
            </p>
          </div>
        </div>
      </section>
      {/* LATEST PROJECTS SECTION */}
      <section className="flex flex-col items-center bg-orange-500 pt-20">
        <h2 className="mb-10 text-4xl font-semibold uppercase md:text-6xl md:font-normal">
          Latest Projects
        </h2>
        <div className="container m-auto mb-10 px-5 xl:px-0">
          <PortfolioProjects limit={3} />
        </div>
        <button className="mb-10 rounded-3xl border-2 border-stone-900 bg-stone-900 px-4 py-2 text-lg text-stone-50 transition-all duration-300 ease-in-out hover:rounded-full hover:border-stone-300 hover:bg-stone-700 hover:px-8">
          <RouterLink to={"/portfolio"}>All Projects</RouterLink>
        </button>
      </section>
    </>
  );
}

export default Home;

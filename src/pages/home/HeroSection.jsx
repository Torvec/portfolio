function HeroSection() {
  return (
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
  );
}

export default HeroSection;

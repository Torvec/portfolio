function AppFooter() {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-stone-900 px-5 py-20 text-center text-stone-200 font-sans">
      <div className="mb-5 flex justify-center gap-12 font-sans text-lg">
        <a
          href="https://www.linkedin.com/in/edward-von/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Torvec"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          GitHub
        </a>
        <a
          href="https://dev.to/torvec"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          Dev.to
        </a>
      </div>
      <p className="mb-5">
        &copy; 2023 Edward Vonschondorf. All rights reserved.
      </p>
      <button
        type="button"
        onClick={handleClickToTop}
        className="rounded-xl bg-stone-700 px-4 py-2 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:px-8 hover:text-stone-900"
      >
        Top
      </button>
    </footer>
  );
}

export default AppFooter;

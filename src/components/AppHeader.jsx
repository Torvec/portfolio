import { Link as RouterLink, NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className="container m-auto">
      <nav className="flex items-center justify-between">
        <RouterLink
          to={"/home"}
          className="text-xl font-bold text-stone-800 transition-all duration-300 ease-in-out hover:tracking-wider hover:text-stone-500 md:text-3xl"
        >
          &#123;EV&#125;
        </RouterLink>
        <ul className="flex items-center gap-4 py-4 text-sm font-semibold md:gap-12 md:text-lg">
          <li>
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/resume">
              Resume
            </NavLink>
          </li>
          <li>
            <a
              className="rounded-2xl border-2 border-orange-500 px-4 py-1.5 text-orange-500 transition-all duration-300 ease-in-out hover:rounded-full hover:px-6 hover:text-stone-500 hover:border-stone-500"
              href="mailto:me@edward-vonschondorf.dev"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;

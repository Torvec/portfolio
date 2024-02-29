import { Link as RouterLink, NavLink } from "react-router-dom";
import LogoURL from "/assets/img/logo.svg";

function AppHeader() {
  return (
    <header className="border-b-2 border-stone-500">
      <nav className="container m-auto flex items-center justify-between">
        <RouterLink
          to={"/"}
          className="transition-all duration-300 ease-in-out hover:scale-125"
        >
          <img src={LogoURL} alt="EV Logo" />
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
              className="rounded-2xl border-2 border-orange-500 px-4 py-1.5 text-orange-500 transition-all duration-300 ease-in-out hover:rounded-full hover:border-stone-500 hover:px-6 hover:text-stone-500"
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

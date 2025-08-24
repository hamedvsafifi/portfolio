import ThemeToggle from "./ThemeToggle";
import useTabletDetection from "./useTabletDetection";
import { Link, useLocation } from "react-router-dom";
// colors: #BFF0BF #C4CEE7
// function HeaderNav({ activePage }) {
//   return (
//     <div>
//       <Nav activePage={activePage} />
//     </div>
//   );
// }

function Nav() {
  const isTablet = useTabletDetection();
  const location = useLocation();

  return (
    <div className="flex justify-between items-center ">
      <h4 className="text-blue-500 dark:text-[#BFF0BF] font-afifi uppercase text-2xl mr-5 relative right-2">
        afifi
      </h4>
      <ul className="flex items-center justify-right md:justify-center gap-3 md:gap-10 ">
        <li>
          <Link to="/">
            <button
              className={`cursor-pointer capitalize  ${
                location.pathname === "/"
                  ? " border-b-2 pb-[4px] border-blue-600  dark:border-blue-300"
                  : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
              }`}
            >
              home
            </button>
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <button
              className={`cursor-pointer capitalize  ${
                location.pathname === "/projects"
                  ? " border-b-2 pb-[4px] border-blue-600 dark:border-blue-300"
                  : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
              }`}
            >
              projects
            </button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button
              className={`cursor-pointer capitalize pb-[2px] ${
                location.pathname === "/contact"
                  ? " border-b-2 pb-[4px] border-blue-600 dark:border-blue-300"
                  : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
              }`}
            >
              contact
            </button>
          </Link>
        </li>
        <li className={`hidden ${isTablet ? "hidden" : "md:block"}`}>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
}

export default Nav;

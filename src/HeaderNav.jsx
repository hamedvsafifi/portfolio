import ThemeToggle from "./ThemeToggle";
import ScreenWidth from "./ScreenWidth";
import useTabletDetection from "./useTabletDetection";
// colors: #BFF0BF #C4CEE7
function HeaderNav({ handelPageChange, activePage }) {
  return (
    <div>
      <Nav handelPageChange={handelPageChange} activePage={activePage} />
      <Intro handelPageChange={handelPageChange} />
    </div>
  );
}

function Nav({ handelPageChange, activePage }) {
  const isTablet = useTabletDetection();

  return (
    <div className="flex justify-between items-center ">
      <h4 className="text-blue-500 dark:text-[#BFF0BF] font-afifi uppercase text-2xl mr-5 relative right-2">
        afifi
      </h4>
      <ul className="flex items-center justify-right md:justify-center gap-3 md:gap-10 ">
        <li>
          <button
            className={`cursor-pointer capitalize  ${
              activePage === "home"
                ? " border-b-2 pb-[4px] border-blue-600  dark:border-blue-300"
                : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
            }`}
            onClick={() => handelPageChange("home")}
          >
            home
          </button>
        </li>

        <li>
          <button
            className={`cursor-pointer capitalize  ${
              activePage === "projects"
                ? " border-b-2 pb-[4px] border-blue-600 dark:border-blue-300"
                : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
            }`}
            onClick={() => handelPageChange("projects")}
          >
            projects
          </button>
        </li>
        <li>
          <button
            className={`cursor-pointer capitalize pb-[2px] ${
              activePage === "contact"
                ? " border-b-2 pb-[4px] border-blue-600 dark:border-blue-300"
                : "hover:border-green-600 dark:hover:border-green-300 hover:border-b-2 hover:rounded-[2px]"
            }`}
            onClick={() => handelPageChange("contact")}
          >
            contact
          </button>
        </li>
        <li className={`hidden ${isTablet ? "hidden" : "md:block"}`}>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
}

function Intro({ handelPageChange }) {
  const screenWidth = ScreenWidth().width;
  const isMobile = screenWidth < 640; // Adjust the breakpoint as needed
  return (
    <>
      <div className="flex flex-col gap-5 ">
        {isMobile ? (
          <h1 className="text-5xl font-bold capitalize text-center pt-5 ">
            <span className=" dark:text-[#BFF0BF] text-blue-500">
              hi, i'm afifi
            </span>
            <br /> front-end <br /> developer
          </h1>
        ) : (
          <h1 className="text-5xl font-bold capitalize text-center p-5">
            <span className=" dark:text-[#BFF0BF] text-blue-500">
              hi, i'm afifi,
            </span>
            front-end developer
          </h1>
        )}
        <p
          className={`dark:text-gray-400 text-gray-600  capitalize ${
            isMobile ? "px-2 text-center" : "text-center"
          }`}
        >
          ui lover | css margician
        </p>
        <div
          className={`flex ${
            isMobile
              ? "flex-row justify-center"
              : "justify-center text-center items-center"
          } ${screenWidth < 350 ? "flex-row justify-center" : ""} gap-2`}
        >
          <button
            className="btn-primary"
            onClick={() => handelPageChange("projects")}
          >
            view projects
          </button>
          <button className="btn-secondary">download cv</button>
        </div>
      </div>
    </>
  );
}
export default HeaderNav;

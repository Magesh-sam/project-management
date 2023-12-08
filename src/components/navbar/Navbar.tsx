import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-center gap-8 items-center  py-3 w-full shadow-md font-bold">
      <Link
        to="/"
        className={location.pathname === "/" ? " text-blue-500 " : ""}
      >
        Home {"(project-data)"}
      </Link>
      <Link
        to="/charts"
        className={location.pathname === "/charts" ? " text-blue-500" : ""}
      >
        Insights
      </Link>
      <Link
        to="/primaryform"
        className="bg-[#466596] px-2 py-3 text-white rounded-md"
      >
        Add Project
      </Link>
    </nav>
  );
}

export default Navbar;

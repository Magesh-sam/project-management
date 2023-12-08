import { Link, useLocation } from "react-router-dom";

function FormWizard() {
  const location = useLocation();
  return (
    <div className="flex p-3 border-2 border-blue-500  w-full items-center justify-evenly ">
      <Link to="/primaryform" className="flex gap-1 items-center group ">
        <span
          className={` rounded-full flex justify-center items-center h-6 w-6 border-2 border-black group-hover:bg-blue-700 group-hover:text-white group-hover:border-none ${
            location.pathname === "/primaryform"
              ? "bg-blue-700 text-white border-none"
              : ""
          }`}
        >
          1
        </span>
        <p className={"flex flex-col gap-2 text-sm"}>Primary</p>
      </Link>
      <Link to="/secondaryform" className="flex gap-1 items-center group">
        <span
          className={` rounded-full flex justify-center items-center h-6 w-6 border-2 border-black group-hover:bg-blue-700 group-hover:text-white group-hover:border-none ${
            location.pathname === "/secondaryform"
              ? "bg-blue-700 text-white border-none"
              : ""
          }`}
        >
          2
        </span>
        <p className={"flex flex-col gap-2 text-sm"}>Secondary</p>
      </Link>
      <Link to="/contactform" className="flex gap-1 items-center group">
        <span
          className={` rounded-full flex justify-center items-center h-6 w-6 border-2 border-black group-hover:bg-blue-700 group-hover:text-white group-hover:border-none ${
            location.pathname === "/contactform"
              ? "bg-blue-700 text-white border-none"
              : ""
          }`}
        >
          3
        </span>
        <p className={"flex flex-col gap-2 text-sm"}>Contact</p>
      </Link>
      <Link to="/projectdetails" className="flex gap-1 items-center group">
        <span
          className={` rounded-full flex justify-center items-center h-6 w-6 border-2 border-black group-hover:bg-blue-700 group-hover:text-white group-hover:border-none ${
            location.pathname === "/projectdetails"
              ? "bg-blue-700 text-white border-none"
              : ""
          }`}
        >
          4
        </span>
        <p className={"flex flex-col gap-2 text-sm"}>Final Step</p>
      </Link>
    </div>
  );
}

export default FormWizard;

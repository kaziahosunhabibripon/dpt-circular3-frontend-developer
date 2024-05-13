import { RiFlightTakeoffLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full bg-slate-900 text-gray-400">
      <nav className="grid grid-cols-12 items-center justify-center mx-auto">
        <div className="col-span-2 justify-center items-center">
          <Link
            href="/"
            className="text-lg font-medium flex items-center justify-center"
          >
            <RiFlightTakeoffLine className="animate-pulse text-4xl ml-4 hover:animate-bounce hover:text-2xl hover:text-fuchsia-400 text-sky-500" />
          </Link>
        </div>

        <div className="col-span-8 text-lg font-medium flex items-center justify-around px-[64px]">
          <Link to="/dashboard" className="text-lg font-medium items-center">
            Dashboard
          </Link>
          <Link to="/master-price" className="text-lg font-medium items-center">
            Master Price
          </Link>
          <Link to="/custom-price" className="text-lg font-medium items-center">
            Custom Price
          </Link>
          <Link to="/calender" className="text-lg font-medium  items-center">
            Calender
          </Link>
          <Link to="/reports" className="text-lg font-medium items-center">
            Reports
          </Link>
        </div>
        <span className="col-span-2 rounded font-medium flex items-center justify-center">
          <Link to="#" className=" bg-slate-800 px-6 py-2">
            Login
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;

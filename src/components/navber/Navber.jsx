import { NavLink } from "react-router-dom";
import logo from "../../assets/images/demo_logo.png";

const Navber = () => {
  const navitems = (
    <div className="flex text-lg gap-4 font-medium items-center">
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{navitems}</ul>
      </div>
      <div className="navbar-end">
        <a className="px-5 rounded-md font-Playfair py-2 border-[1px] text-[#223322] font-medium text-lg">Sing In</a>
      </div>
    </div>
  );
};

export default Navber;

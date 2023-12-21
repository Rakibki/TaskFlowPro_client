import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/demo_logo.png";
import getAuth from "../../hooks/getAuth";

const Navber = () => {
  const { user, logOut } = getAuth();

  const handleSingOut = () => {
    logOut();
  };

  const navitems = (
    <div className="flex text-lg gap-5 font-medium items-center">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#d88531]" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/pricing"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#d88531]" : ""
          }
        >
          Pricing
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#d88531]" : ""
          }
        >
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/chooseMe"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#d88531]" : ""
          }
        >
          Choose Me
        </NavLink>
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
        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="w-12 m-1">
              <img
                className="rounded-full w-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-4 menu shadow bg-base-100 rounded-box w-52"
            >
              <Link className="px-5 rounded-md mb-2 hover:opacity-60 cursor-pointer font-Playfair py-2 border-[1px] text-[#223322] font-medium" to={"/dashboard/addNewTask"}>
                <a className="text-lg">
                  Dashboard
                </a>
              </Link>
              <a
                onClick={handleSingOut}
                className="px-5 rounded-md hover:opacity-60 cursor-pointer font-Playfair py-2 border-[1px] text-[#223322] font-medium text-lg"
              >
                Log Out
              </a>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <a className="px-5 rounded-md hover:opacity-60 cursor-pointer font-Playfair py-2 border-[1px] text-[#223322] font-medium text-lg">
              Sing In
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;

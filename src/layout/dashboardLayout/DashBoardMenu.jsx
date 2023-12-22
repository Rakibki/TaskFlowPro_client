import DashboardNavItem from "../../components/dashboardNavItem/DashboardNavItem";
import { MdAddChart } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import getAuth from "../../hooks/getAuth";
import { useNavigate } from "react-router-dom";

const DashBoardMenu = () => {
  const {logOut} = getAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logOut()
    navigate("/")
  }

  return (
    <ul className="h-screen relative">
      <DashboardNavItem
        text={"Add New Task"}
        Icon={MdAddChart}
        location={"/dashboard/addNewTask"}
      />
      <DashboardNavItem
        text={"Previous Tasks"}
        Icon={CiViewList}
        location={"/dashboard/previousTasks"}
      />

      <div className="absolute w-full bottom-3">
        <div  onClick={handleLogout} className="mb-1 p-2 gap-2 block transition-all text-[#515d6e] font-Inter text-base">
          <div className="flex cursor-pointer text-[#a3353e] bg-[#d34141] transition-all p-2 bg-opacity-20 items-center gap-2">
            <div>
              <LuLogOut className="text-2xl" />
            </div>
            <div className="">Logout</div>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default DashBoardMenu;

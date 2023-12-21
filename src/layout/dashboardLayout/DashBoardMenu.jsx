import DashboardNavItem from "../../components/dashboardNavItem/DashboardNavItem"
import { MdAddChart } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const DashBoardMenu = () => {
  return (
    <ul>
        <DashboardNavItem text={"Add New Task"} Icon={MdAddChart} location={"/dashboard/addNewTask"} />
        <DashboardNavItem text={"Previous Tasks"} Icon={CiViewList} location={"/dashboard/previousTasks"} />
    </ul>
  )
}

export default DashBoardMenu
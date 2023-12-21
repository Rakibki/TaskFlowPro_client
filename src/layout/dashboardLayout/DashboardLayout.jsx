import DashBoardMenu from "./DashBoardMenu"
import {Outlet} from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-11">
        <div className="col-span-2 border-2"><DashBoardMenu /></div>
        <div className="col-span-9 border-2"><Outlet /></div>
    </div>
  )
}

export default DashboardLayout
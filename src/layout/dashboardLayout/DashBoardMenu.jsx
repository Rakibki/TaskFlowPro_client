import {NavLink} from "react-router-dom"

const DashBoardMenu = () => {
  return (
    <ul>
        <li><NavLink to={"/dashboard/addNewTask"}>Add New Task</NavLink></li>
        <li>wto</li>
    </ul>
  )
}

export default DashBoardMenu
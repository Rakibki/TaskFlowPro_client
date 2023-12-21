import {NavLink} from "react-router-dom"

const DashBoardMenu = () => {
  return (
    <ul>
        <li><NavLink to={"/dashboard/addNewTask"}>Add New Task</NavLink></li>
        <li><NavLink to={"/dashboard/previousTasks"}>Previous Tasks</NavLink></li>
    </ul>
  )
}

export default DashBoardMenu
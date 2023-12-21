import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddNewTask from "../pages/dashboard/AddNewTask";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import PreviousTasks from "../pages/dashboard/PreviousTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "addNewTask",
        element: <AddNewTask />
      },
      {
        path: "previousTasks",
        element: <PreviousTasks />
      }
    ]
  }
]);

export default router;

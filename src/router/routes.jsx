import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddNewTask from "../pages/dashboard/AddNewTask";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import PreviousTasks from "../pages/dashboard/PreviousTasks";
import Blog from "../pages/blog/Blog";
import Pricing from "../pages/Pricing/Pricing";
import ChooseMe from "../pages/chooseMe/ChooseMe";
import Profile from "../components/profile/Profile";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chooseMe",
        element: <ChooseMe />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "addNewTask",
        element: <AddNewTask />,
      },
      {
        path: "previousTasks",
        element: <PreviousTasks />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;

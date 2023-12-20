import { getAuth } from "firebase/auth";
import Loader from "../components/loader/Loader";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loadding } = getAuth();

  if (loadding) <Loader />;

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />
};

export default PrivateRouter;

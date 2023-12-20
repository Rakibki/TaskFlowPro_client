import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

const getAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default getAuth;

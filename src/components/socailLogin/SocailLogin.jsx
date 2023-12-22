import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import getAuth from "../../hooks/getAuth";
import {useNavigate} from "react-router-dom"

const SocailLogin = () => {
  const { loginWithGoogle, loginWithGithub, user } = getAuth();
  const navigate = useNavigate()

  const hanldeGoogle = () => {
    loginWithGoogle().then(() => {
      navigate("/dashboard/addNewTask");
    });
  };

  const handleGithub = () => {
    loginWithGithub().then(() => {
      navigate("/dashboard/addNewTask");
    });
  };

  console.log(user);

  return (
    <div className="md:w-[40%] w-[60%] relative">
      {/* <img className="absolute top-0 w-full h-full" src={} alt="" /> */}

      <div className="absolute text-white md:p-6 top-0 w-full h-full bg-[#000000a6]">
        <h2 className="text-center font-bold text-3xl">SIGN IN</h2>
        <div className="w-16 mb-10 bg-[#ffa41f] mt-3 h-1 mx-auto"></div>
        <p className="text-center font-medium">
          If you have an account already? So{" "}
          <span className="text-[#ffa41f] font-semibold">Login Now</span> And
          start ad posting less than a mintue
        </p>

        <div className="mt-10">
          <h1 className="text-center mb-6 font-bold text-xl md:text-2xl">
            LOGIN VIA SOCIAL ACCOUNTS
          </h1>

          <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#1cb8eb] items-center text-base p-2">
            <div onClick={hanldeGoogle} className="flex items-center gap-3">
              <AiOutlineGoogle />
              <p className="font-semibold">Login with Google</p>
            </div>
          </div>

          <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#202b3c] items-center text-base p-2">
            <div onClick={handleGithub} className="flex items-center gap-3">
              <AiFillGithub />
              <p className="font-semibold">Login with Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocailLogin;

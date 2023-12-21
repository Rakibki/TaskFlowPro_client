import {Link, useNavigate} from "react-router-dom" 
import SocailLogin from "../../components/socailLogin/SocailLogin";
import getAuth from "../../hooks/getAuth";

const Login = () => {
  const {loginUser} = getAuth();
  const naviagte = useNavigate()
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    await loginUser(email, password)
    naviagte("/dashboard/addNewTask")
  }

  return (
    <div className="flex w-full md:w-[80%] gap-4 md:gap-6 mx-auto my-16 h-[450px] border-2">
      <SocailLogin />

      <div className="w-[60%] ">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <input
              type="email"
              placeholder="email"
              className="input rounded-none input-bordered"
              required
              name="email"
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              className="input rounded-none input-bordered"
              required
              name="password"
            />
          </div>

          <div className="flex my-2 justify-end">
            <div>
              <p className="hover:underline cursor-pointer text-sm">
                Forget Password
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
            >
              SING IN
            </button>
          </div>
          <Link to={"/register"}>
            <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#ffa41f]">
              Register account
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

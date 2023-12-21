import { Link } from "react-router-dom";
import SocailLogin from "../../components/socailLogin/SocailLogin";

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const fname = e.target.fName.value;
    const lname = e.target.lName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imagefile = e.target.image.files[0];

  } 

  return (
    <div className="flex w-full md:w-[80%] gap-4 md:gap-6 mx-auto my-16 h-[450px] border-2">
      <SocailLogin />

      <div className="w-[60%] ">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Your First Name "
              className="input rounded-none input-bordered"
              required
              name="fName"
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="input rounded-none input-bordered"
              required
              name="lName"
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input rounded-none input-bordered"
              required
              name="email"
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder="Enter Your password"
              className="input rounded-none input-bordered"
              required
              name="password"
            />
          </div>

          <div className="flex my-2 justify-between">
            <div>
              <input type="file" name="image" id="" />
            </div>
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
              SING UP
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

export default Register;

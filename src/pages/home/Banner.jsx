import bannerImage from "../../assets/images/her_micronet.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:flex-row flex-col flex md:p-6 p-10 mt-10 items-center">
      <div className="md:order-first order-2">
        <h1 className="text-3xl md:mt-0 mt-6 md:text-6xl mb-4 font-semibold">
          Manage work <span className="text-[#d88531]">Efficiently.</span>
        </h1>
        <h4 className="text-2xl font-semibold mb-2">
          Plan, Track and Organise your work.
        </h4>
        <p className="mb-4 text-[#111827] font-Playfair text-xl">
          An Intranet platform to Manage projects, organise work and focus on
          what’s important.
        </p>

        <div className="mt-3">
          <Link to={"/login"}>
            <a className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
              Let’s Explore
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;

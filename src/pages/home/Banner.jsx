import bannerImage from "../../assets/images/her_micronet.jpg";

const Banner = () => {
  return (
    <div className="grid mt-16 items-center grid-cols-2">
      <div>
        <h1 className="text-6xl mb-4 font-semibold">
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
          <a className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cursor-pointer font-medium text-lg">
            Let’s Explore
          </a>
        </div>
      </div>
      <div>
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;

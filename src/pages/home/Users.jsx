import user from "../../assets/images/hero2.png";

const Users = () => {
  return (
    <div className="lg:grid items-center grid-cols-2 w-full">
      <div className="flex justify-center">
        <img src={user} alt="" />
      </div>

      <div className="lg:px-2 md:px-16 px-6">
        <h2 className="text-2xl mb-4 font-semibold">
          Get the Micronet Advantage. Our stats speak for temselves.
        </h2>
        <h3 className="text-lg">
          It is a long established fact that a reader will be distracted. It is
          a long established fact that a reader will be distracted.
        </h3>

        <div className="grid mt-8 grid-cols-3">
          <div>
            <h2 className="text-2xl font-medium mb-2">Intense research</h2>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </div>

          <div className="p-6 md:block hidden text-2xl w-[80%] mx-auto font-bold border-2 text-center border-[#d88531] rounded-3xl">
            5 <br /> Active <br /> Projects
          </div>

          <div>
            <h1 className="text-2xl font-medium mb-2">segmentation</h1>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>

        <div className="border-2 mt-6 flex">
          <input
            placeholder="Enter email to subscribe"
            className="w-[70%] px-4 text-xl"
            type="text"
          />
          <a className="px-5 w-[30%] rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cursor-pointer font-medium text-lg">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Users;

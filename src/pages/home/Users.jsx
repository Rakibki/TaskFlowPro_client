import user from "../../assets/images/hero2.png";

const Users = () => {
  return (
    <div className="grid items-center grid-cols-2 w-full">
      <div>
        <img src={user} alt="" />
      </div>

      <div>
        <h2 className="text-2xl mb-4 font-semibold">
          Get the Micronet Advantage. Our stats speak for temselves.
        </h2>
        <h3 className="text-lg">
          It is a long established fact that a reader will be distracted. It is
          a long established fact that a reader will be distracted.
        </h3>

        <div className="grid mt-8 grid-cols-3">
          <div>
            <h2 className="text-2xl">Intense research</h2>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </div>

          <div className="p-6 w-[80%] mx-auto border-2 text-xl border-[#d88531] rounded-3xl">
            5 <br /> Active <br /> Projects
          </div>

          <div>
            <h1>Audience segmentation</h1>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>

        <div className="border-2 mt-6 flex">
          <input
            placeholder="Enter email to subscribe"
            className="w-[80%] px-4 text-xl"
            type="text"
          />
          <a className="px-5 w-[20%] rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cursor-pointer font-medium text-lg">
          Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Users;

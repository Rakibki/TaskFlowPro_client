import {IoIosSearch} from "react-icons/io"
import getAuth from "../../hooks/getAuth";

const DashboardNavber = () => {
    const {user} = getAuth()
  return (
    <div>
      <div className="w-full py-2 flex justify-between">
        <div className="flex gap-3 relative items-center">
          <input
            type="text"
            placeholder="Search For Items"
            className="rounded-full bg-[#f8fafc] border-[1px] border-[#e4e9f1] outline-[#ffa41f] text-[#6b7280] placeholder:text-[#6b7280] p-2.5 px-6"
            required
            name="password"
          />
          <div className="absolute right-4 top-[25%]">
            <IoIosSearch className="text-2xl text-[#6b7280] right-2" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
        <div className="flex ml-2 flex-col">
            <h2 className="">{user?.displayName}</h2>
          </div>
          <div className="w-[45px] overflow-hidden h-[45px]">
            <img
              className="w-full h-full rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;

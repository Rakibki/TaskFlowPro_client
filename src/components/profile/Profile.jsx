import getAuth from "../../hooks/getAuth";

const Profile = () => {
  const { user } = getAuth();

  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-[1px] p-8 shadow-2xl w-[50%]">
        <img
          className="w-[70px] -mt-[50px] mx-auto rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <h2 className="text-center text-lg mt-4">{user?.displayName}</h2>
        <h2 className="text-center text-lg mt-4">{user?.email}</h2>
        <div className="flex justify-center mt-2">
          <a className="px-5 mx-auto rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

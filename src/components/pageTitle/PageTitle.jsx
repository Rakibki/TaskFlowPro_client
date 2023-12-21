import image from "../../assets/images/22.png";

const PageTitle = ({ text }) => {
  return (
    <div className="relative w-full h-[150px]">
      <div>
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={image}
          alt=""
        />

        <div className="absolute w-full h-full flex justify-start">
          <h1 className="text-4xl mx-auto mt-[40px] font-bold">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

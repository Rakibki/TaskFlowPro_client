import happy_girl from "../../assets/images/happy_girl.png";
import clients from "../../assets/images/clients-300x84.png";

const Customers = () => {
  return (
    <div className="md:grid mt-6 py-10 items-center px-10 bg-gradient-to-r from-[#23c4ba] to-blue-500 w-full grid-cols-3">
      <div className="col-span-2">
        <h1 className="text-4xl font-semibold mb-3">
          We love our customers and they love us too.
        </h1>
        <p className="text-xl">
          We love our customers and they love us too. It is a long established
          fact that a reader will be distracted. It is a long established fact
          that a reader will be distracted.
        </p>
        <div className="flex gap-1 mt-4 items-center">
          <img className="w-32" src={clients} alt="" />
          <h2 className="text-lg font-medium">+334 members</h2>
        </div>
      </div>
      <div className="col-span-1">
        <img className="w-full" src={happy_girl} alt="" />
      </div>
    </div>
  );
};

export default Customers;

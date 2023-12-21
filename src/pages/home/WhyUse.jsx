import { FaTasks } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const WhyUse = () => {
  return (
    <div className="my-16 md:px-4 px-10">
      <h2 className="mt-10 text-5xl text-center mb-7 font-bold">Why use it?</h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
        <div className="bg-[#e3defc] p-5 rounded-2xl">
          <FaTasks className="text-3xl mx-auto mt-6 mb-4" />
          <h1 className="text-2xl font-semibold text-center mb-2">Handling The Task</h1>
          <p className="text-center font-Playfair font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            officia quaerat eos ipsum consequatur dolores vitae iste voluptatem
            voluptates dignissimos.
          </p>
        </div>

        <div className="bg-[#dffdec] p-5 rounded-2xl">
          <RiTodoLine className="text-3xl mx-auto mt-6 mb-4" />
          <h1 className="text-2xl font-semibold text-center mb-2">Creating To-Do List</h1>
          <p className="text-center font-Playfair font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            officia quaerat eos ipsum consequatur dolores vitae iste voluptatem
            voluptates dignissimos.
          </p>
        </div>

        <div className="bg-[#fceedf] p-5 rounded-2xl">
          <FaUsers className="text-3xl mx-auto mt-6 mb-4" />
          <h1 className="text-2xl font-semibold text-center mb-2">Team Collaboration</h1>
          <p className="text-center font-Playfair font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            officia quaerat eos ipsum consequatur dolores vitae iste voluptatem
            voluptates dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;

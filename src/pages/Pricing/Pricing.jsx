import PageTitle from "../../components/pageTitle/PageTitle";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";

const Pricing = () => {
  return (
    <div>
      <PageTitle text={"Pricing"} />

      <div className="grid md:px-6 px-16 md:grid-cols-3 gap-3 my-16">
        <div className="bg-[#eaeaea] p-8">
          <h2 className="text-xl mb-3 font-medium text-[#888888]">
            Basic Plan
          </h2>

          <h1 className="text-6xl mb-6 font-extrabold">$90</h1>

          <ul className="flex flex-col mb-6 gap-2">
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> 25 Tasks
              Manage
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" />
              Domestic Help
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Reminder
              Service
            </li>
          </ul>

          <a className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
            Get Stated{" "}
          </a>
        </div>

        <div className="bg-[#eaeaea] p-8">
          <h2 className="text-xl mb-3 font-medium text-[#888888]">
            Standard Plan
          </h2>
          <h1 className="text-6xl mb-6 font-extrabold">$130</h1>
          <ul className="flex flex-col mb-6 gap-2">
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> 50 Tasks
              Manage
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" />
              Domestic Help
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Reminder
              Service
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Reminder
              Party Planning
            </li>
          </ul>

          <a className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
            Get Stated{" "}
          </a>
        </div>

        <div className="bg-[#eaeaea] p-8">
          <h2 className="text-xl mb-3 font-medium text-[#888888]">
            Premium Plan
          </h2>
          <h1 className="text-6xl mb-6 font-extrabold">$199</h1>
          <ul className="flex flex-col mb-6 gap-2">
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Unlimited
              Tasks
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" />
              Domestic Help
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Reminder
              Service
            </li>
            <li className="items-center flex gap-2 text-xl circle">
              <LiaAngleDoubleRightSolid className="text-[#d88531]" /> Reminder
              Party Planning
            </li>
          </ul>

          <a className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
            Get Stated{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

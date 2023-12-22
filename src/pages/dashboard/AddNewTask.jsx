import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PageTitle from "../../components/pageTitle/PageTitle";
import getAuth from "../../hooks/getAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const AddNewTask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = getAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      userEmail: user?.email,
      title: e.target.title.value,
      desc: e.target.desc.value,
      status: "ongoingTasks",
      priority: e.target.priority.value,
      deadlines: new Date(startDate).toLocaleDateString(),
    };
    const res = await axiosSecure.post("/task", taskData);
    if (res?.data?.insertedId) {
      toast.success("🦄Task Added successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/previousTasks")
    }
  };

  return (
    <div>
      <PageTitle text={"Add A New Task"} />
      <form onSubmit={handleSubmit} className="m-10 w-[70%] mx-auto">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="input mb-4 rounded-none input-bordered"
            required
            name="title"
          />
        </div>

        <div className="mb-4 form-control">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="input rounded-none input-bordered"
            required
            name="desc"
            id="desc"
          />
        </div>

        <div className="grid gap-2 grid-cols-2">
          <div className="w-full">
            <label htmlFor="priority">priority</label>
            <select
              className="input w-full rounded-none input-bordered"
              name="priority"
              id="priority"
            >
              <option disabled defaultChecked selected>
                Select
              </option>
              <option value="priority low">Priority Low</option>
              <option value="priority moderate">Priority Moderate</option>
              <option value="priority high">Priority High</option>
            </select>
          </div>
          <div className=" flex flex-col w-full">
            <label htmlFor="deadlines">Deadlines</label>
            <DatePicker
              className="input rounded-none input-bordered"
              selected={startDate}
              id="deadlines"
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 mt-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddNewTask;

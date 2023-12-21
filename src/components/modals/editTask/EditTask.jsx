import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EditTask = ({
    refetch,
  updatedTask,
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      priority: e.target.priority.value,
      deadlines: e.target.deadlines.value,
    };

    const res = await axiosSecure.put(`/task/${updatedTask?._id}`, updatedData);
    if (res?.data) {
      toast.success("Updated Task successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeModal()
      refetch()
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-xl mb-4">Edit Your Task</div>
        <form onSubmit={handleUpdate} className="w-[350px]">
          <div className="form-control mb-2">
            <input
              type="text"
              placeholder="Title"
              className="input rounded-none input-bordered"
              required
              defaultValue={updatedTask?.title}
              name="title"
            />
          </div>

          <div className=" mb-2 form-control">
            <input
              type="text"
              placeholder="Description"
              className="input rounded-none input-bordered"
              required
              name="desc"
              defaultValue={updatedTask?.desc}
            />
          </div>

          <select
            defaultValue={updatedTask?.priority}
            className="input mb-2 w-full rounded-none input-bordered"
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

          <div className=" flex flex-col w-full">
            <DatePicker
              defaultValue={updatedTask?.deadlines}
              className="input rounded-none input-bordered"
              selected={startDate}
              id="deadlines"
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
            >
              Update
            </button>
            <button
              onClick={closeModal}
              className="px-5 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
            >
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;

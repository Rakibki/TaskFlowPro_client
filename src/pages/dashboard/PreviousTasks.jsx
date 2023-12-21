import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import getAuth from "../../hooks/getAuth";
import PageTitle from "../../components/pageTitle/PageTitle";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import EditTask from "../../components/modals/editTask/EditTask";
import { useState } from "react";

const PreviousTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = getAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({})

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { isPending, data, refetch } = useQuery({
    queryKey: ["my-task-list"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/task/${user?.email}`);
      return res?.data;
    },
  });

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/task/${id}`);
    if (res?.data?.deletedCount > 0) {
      toast.success("🦄Task deleted successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch();
    }
  };

  const handleEdit = (task) => {
    setIsOpen(true)
    setUpdatedTask(task)
  }

  if (isPending) <Loader />;

  return (
    <div>
      <PageTitle text={"My Added Tasks"} />

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Count</th>
              <th>Title</th>
              <th>Description</th>
              <th>priority</th>
              <th>deadlines</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((task, index) => {
              return (
                <tr key={task?._id}>
                  <th>{index + 1}</th>
                  <td>{task?.title}</td>
                  <td>{task?.desc.slice(1, 10)}....</td>
                  <td>{task?.priority}</td>
                  <td>{task?.deadlines}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleDelete(task?._id)}
                      className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
                    >
                      <IoCloseSharp />
                    </button>
                    <button onClick={() => handleEdit(task)} className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg">
                      <FaRegEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <EditTask refetch={refetch} updatedTask={updatedTask} openModal={handleEdit} modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} />
    </div>
  );
};

export default PreviousTasks;

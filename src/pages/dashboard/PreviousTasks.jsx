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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const PreviousTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = getAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({});
  const [tabIndex, setTabIndex] = useState(0);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { isPending, data, refetch } = useQuery({
    queryKey: ["my-task-list"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/task/${user?.email}`);
      const ongoingTasks = res?.data.filter(
        (item) => item.status === "ongoingTasks"
      );
      setOngoingTasks(ongoingTasks);
      const completedTasks = res?.data.filter(
        (item) => item.status === "completedTasks"
      );
      setCompletedTasks(completedTasks);
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
    setIsOpen(true);
    setUpdatedTask(task);
  };

  if (isPending) <Loader />;

  return (
    <div>
      <PageTitle text={"My Added Tasks"} />

      <div className="overflow-x-auto mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"flex mb-4 gap-4 ml-4 mt-4 text-lg font-medium"}>
            <Tab
              className={`${
                tabIndex === 0 ? "border-b-2 pb-2 border-[#d88531]" : ""
              }`}
            >
              Ongoing Tasks
            </Tab>
            <Tab
              className={`${
                tabIndex === 1 ? "border-b-2 pb-2 border-[#d88531]" : ""
              }`}
            >
              Completed Tasks
            </Tab>
          </TabList>

          <TabPanel>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>priority</th>
                  <th>deadlines</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {ongoingTasks?.map((task, index) => {
                  return (
                    <tr key={task?._id}>
                      <th>{index + 1}</th>
                      <td>{task?.title}</td>
                      <td>{task?.desc.slice(1, 10)}....</td>
                      <td>{task?.priority}</td>
                      <td>{task?.deadlines}</td>
                      <td>{task?.status}</td>
                      <td className="flex gap-2">
                        <button
                          onClick={() => handleDelete(task?._id)}
                          className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
                        >
                          <IoCloseSharp />
                        </button>
                        <button
                          onClick={() => handleEdit(task)}
                          className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
                        >
                          <FaRegEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabPanel>

          <TabPanel>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>priority</th>
                  <th>deadlines</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {completedTasks?.map((task, index) => {
                  return (
                    <tr key={task?._id}>
                      <th>{index + 1}</th>
                      <td>{task?.title}</td>
                      <td>{task?.desc.slice(1, 10)}....</td>
                      <td>{task?.priority}</td>
                      <td>{task?.deadlines}</td>
                      <td>{task?.status}</td>
                      <td className="flex gap-2">
                        <button
                          onClick={() => handleDelete(task?._id)}
                          className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
                        >
                          <IoCloseSharp />
                        </button>
                        <button
                          onClick={() => handleEdit(task)}
                          className="px-4 rounded-md font-Playfair bg-[#d88531] py-2 border-[1px] text-white cur font-medium text-lg"
                        >
                          <FaRegEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
      <EditTask
        refetch={refetch}
        updatedTask={updatedTask}
        openModal={handleEdit}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default PreviousTasks;

const AddNewTask = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <input
            type="text"
            placeholder="Title"
            className="input rounded-none input-bordered"
            required
            name="title"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;

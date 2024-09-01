import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../redux/tasks/tasksSlice.js";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input type="checkbox" onChange={handleToggle} className={css.checkbox} />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete} type="button">
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;

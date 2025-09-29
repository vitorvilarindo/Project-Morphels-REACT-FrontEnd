import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <div className="p-6 bg-slate-200 rounded-md shadow">
      <ul className="space-y-4" >
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button onClick={() => props.onCheckTask(task.id)} className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${task.IsCompleted && "line-through" }`}>
              {task.title}
              </button>
            <button onClick={() => onSeeDetails(task)} className="bg-slate-400 text-white p-2 rounded-md"><ChevronRightIcon /> </button>
            <button onClick={() => props.deleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-md"><TrashIcon /> </button>
            </li>
        ))}
      
        </ul>
    </div>
  );
}
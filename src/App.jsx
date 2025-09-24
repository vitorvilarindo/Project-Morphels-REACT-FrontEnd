import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks]  = useState([{
      id: 1,
      title: "Estudar React",
      description: "Estudar React",
      IsCompleted: false

    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript",
      IsCompleted: false

    },
    {
      id: 3,
      title: "Estudar TypeScript",
      description: "Estudar TypeScript",
      IsCompleted: false
  
    }])

  function onCheckTask(id){
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, IsCompleted: !task.IsCompleted}
      }
      return task
    }
    )
    setTasks(newTasks)
  }

  function deleteTask(id){
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  return( 
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciandor de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} onCheckTask={onCheckTask} deleteTask={deleteTask}/>
      </div>
    </div>
  
  )
};

export default App;
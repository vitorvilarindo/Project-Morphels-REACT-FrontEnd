import { useState } from "react";

export default function AddTask({addTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
      <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
      value={title} 
      onChange={(event) => setTitle(event.target.value)} 
      type="text" 
      placeholder="Digite o titulo da tarefa"/>

      <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
      value={description} 
      onChange={(event) => setDescription(event.target.value)} 
      type="text" 
      placeholder="Digite a descrição da tarefa"/>

      <button className="bg-slate-500 text-white px-4 py-2 rounded-md" onClick={()=> addTask(title, description)}>Adicionar</button>
    </div>

  );
}
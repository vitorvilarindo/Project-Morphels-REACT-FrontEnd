import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams as userSearchParams } from "react-router-dom";

function TaskPage () {
  const [searchParams] = userSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return  <div className="w-screen h-screen bg-slate-500 p-6">
    <div className="flex relative justify-center mb-6">
      <button className="absolute left-0 top-0 bottom-0 text-slate-100" onClick={() => window.history.back()}>
        <ChevronLeftIcon />
      </button>
      <h1 className="text-3xl text-slate-100 font-bold text-center">Descrição</h1>
    </div>
    <div className="bg-slate-200 max-w-3xl mx-auto p-6 rounded-lg flex flex-col gap-4">
      <h2 className="text-xl font-bold text-slate-600">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
}

export default TaskPage;
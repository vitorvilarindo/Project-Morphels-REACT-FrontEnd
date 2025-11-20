import { Calendar, Trash2 } from "lucide-react";
import Modal from "./modalRevenues";
function DataBalons({
  type,
  date,
  title,
  value,
  payment,
  color_value,
  onDelete,
  showEditForm
}) {
  const cores = {
    red: ["text-red-700", "bg-red-100"],
    green: ["text-green-700", "bg-green-100"],
    blue: ["text-blue-700", "bg-blue-100"],
    yellow: ["text-yellow-700", "bg-yellow-100"],
    purple: ["text-purple-700", "bg-purple-100"],
    gray: ["text-black", "bg-gray-100"],
  };

  if (!type || !date || !title || !value || !payment) {
    return null; // Retorna null se algum dos dados obrigatórios estiver faltando
  }
  let color_category;
  if (type === "Utilidades" || type === "Dizimo") {
    color_category = "blue";
  } else if (type === "Oferta" || type === "Eventos") {
    color_category = "green";
  } else if (type === "Doação" || type === "Projetos") {
    color_category = "purple";
  } else if (type === "Manutenção") {
    color_category = "yellow";
  } else if (type === "Salários") {
    color_category = "red";
  } else {
    color_category = "gray";
  }

  const classeCorValue = cores[color_value] ?? ["text-gray-500", "bg-gray-100"];
  const classeCorCategory = cores[color_category] ?? [
    "text-gray-500",
    "bg-gray-100",
  ];

  const dataObj = new Date(date);

  const formatedData = dataObj.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div
      onClick={showEditForm}
      className="flex flex-col justify-center border hover:bg-gray-100 border-neutral-200 bg-white px-4 py-3 rounded-lg gap-1"
    >
      <nav className="flex gap-3">
        <p
          className={`text-xs text-blue-300 ${classeCorCategory[0]} ${classeCorCategory[1]} px-2 py-1 rounded-lg items-center`}
        >
          {type}
        </p>
        <p className="flex items-center text-gray-500 text-xs">
          <Calendar size={13} /> {formatedData}
        </p>
      </nav>

      <div className="flex justify-between items-center">
        <h1 className="text-sm">{title}</h1>
        <div className="flex gap-3 items-center">
          <p className={`text-sl ${classeCorValue[0]}`}>R$ {value}</p>
          <button onClick={(e) => {e.stopPropagation(); onDelete()}} className="text-red-700 p-2 hover:bg-red-100 rounded-lg">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <section className="flex justify-start">
        <p className="text-xs text-gray-500">{payment}</p>
      </section>
    </div>
  );
}
export default DataBalons;

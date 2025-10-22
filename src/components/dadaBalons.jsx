import { Calendar, Trash2 } from "lucide-react";
function DataBalons({category, date, title, value, description, color_value, color_category}) {
  const cores = {
    red: ['text-red-700', 'bg-red-100'],
    green: ['text-green-700', 'bg-green-100'],
    blue: ['text-blue-700', 'bg-blue-100'],
    yellow: ['text-yellow-700', 'bg-yellow-100'],
    purple: ['text-purple-700', 'bg-purple-100'],
    gray: ['text-black', 'bg-gray-100'],
  }

  const classeCorValue = cores[color_value] ?? ['text-gray-500', 'bg-gray-100']
  const classeCorCategory = cores[color_category] ?? ['text-gray-500', 'bg-gray-100']

  return (
    <button className="flex flex-col justify-center border hover:bg-gray-100 border-neutral-200 bg-white px-4 py-3 rounded-lg gap-1">
      <nav className="flex gap-3 ">

        <p className={`text-xs text-blue-300 ${classeCorCategory[0]} ${classeCorCategory[1]} px-2 py-1 rounded-lg items-center`}>{category}</p>        
        <p className="flex items-center text-gray-500 text-xs"> <Calendar  size={13}/> {date}</p>
      </nav>
      <section className="flex justify-between items-center">
        <h1 className="text-sm">{title}</h1>
        <div className="flex gap-3">
          <p className={`text-sl ${classeCorValue[0]}`}>R$ {value}</p>
          <button className="text-red-700"><Trash2 size={16}/></button>
        </div>
      </section>
      <section className="flex justify-start">
        <p className="text-xs text-gray-500">{description}</p>
      </section>
    </button>
  )
}
export default DataBalons;
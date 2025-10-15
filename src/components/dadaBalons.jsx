import { Calendar, Trash2 } from "lucide-react";
function DataBalons({category, data, title, value, description, color_value, color_categorty}) {
  const cores = {
    red: ['text-red-600', 'bg-red-200'],
    green: ['text-green-600', 'bg-green-200'],
    blue: ['text-blue-600', 'bg-blue-200'],
    yellow: ['text-yellow-600', 'bg-yellow-200'],
    purple: ['text-purple-600', 'bg-purple-200'],
    gray: ['text-black', 'bg-gray-200'],
  }

  const classeCorValue = cores[color_value]
  const classeCorCategory = cores[color_categorty]

  return (
    <div className="flex flex-col justify-center border border-neutral-200 bg-white px-4 py-3 rounded-lg gap-1">
      <nav className="flex gap-3 ">

        <p className={`text-xs text-blue-300 ${classeCorCategory[0]} ${classeCorCategory[1]} px-2 py-1 rounded-lg items-center`}>{category}</p>        
        <p className="flex items-center text-gray-500 text-xs"> <Calendar  size={13}/> {data}</p>
      </nav>
      <section className="flex justify-between items-center">
        <h1 className="text-sm">{title}</h1>
        <div className="flex gap-3">
          <p className={`text-sl ${classeCorValue[0]}`}>R$ {value}</p>
          <button className="text-red-600"><Trash2 size={16}/></button>
        </div>
      </section>
      <section className="flex justify-start">
        <p className="text-xs text-gray-500">{description}</p>
      </section>
    </div>
  )
}
export default DataBalons;
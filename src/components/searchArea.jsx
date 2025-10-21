import { Search, Funnel } from "lucide-react";
function SearchArea({ placeholder}) {
  return (
    <div className="flex items-center gap-2 w-full">
      <Search size={16} className="text-gray-500" />
        <input
          className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
          type="text"
          placeholder={placeholder}
        />
        
      <button className="flex hover:bg-gray-100 py-1.5 px-2 text-sm rounded-lg border border-gray-300 transform items-center gap-3">
        <Funnel size={16} />
        Filters
      </button>
    </div>
  );
}
export default SearchArea;
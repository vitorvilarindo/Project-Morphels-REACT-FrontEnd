import { Search, Funnel } from "lucide-react";
import SearchBar from "./searchBar.jsx";
function SearchArea({ placeholder}) {
  return (
    <div className="flex items-center gap-2 w-full">
      <Search size={16} className="text-gray-500" />
      <SearchBar placeholder={placeholder} type="text"/>
        
      <button className="flex hover:bg-gray-100 py-1.5 px-2 text-sm rounded-lg border border-gray-300 transform items-center gap-3">
        <Funnel size={16} />
        Filters
      </button>
    </div>
  );
}
export default SearchArea;
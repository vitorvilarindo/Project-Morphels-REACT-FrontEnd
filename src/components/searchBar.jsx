function SearchBar(props) {
  return (
      <input
          id="searchbar"
          className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" 
          {...props}
        />
  );
}
export default SearchBar;
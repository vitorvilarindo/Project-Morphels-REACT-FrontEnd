function SearchBar(props) {
  return (
      <input
          className="w-full text-xs bg-bg-secondary-color border rounded-md border-bg-secondary-destack-color hover:cursor-auto focus:border-gray-400 focus:outline-none transition-all px-2 py-2"
          {...props}
        />
  );
}
export default SearchBar;
import SearchBar from "./searchBar.jsx";

function Inputs(props) {

  return (<>
          <div className="flex flex-col items-start w-full space-y-1">
            <label htmlFor={props.id} className="text-xs">{props.children}</label>
            <input
              id={props.id}
              placeholder={props.placeholder}
              type={props.type}
              className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" 
              {...props.register}
            />
          </div>
  </>)
}
export default Inputs;
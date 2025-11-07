import SearchBar from "./searchBar.jsx";
function Inputs(props) {
  return (<>
          <div className="flex flex-col items-start w-full space-y-1">
            <label htmlFor={props.id} className="text-xs">{props.children}</label>
            <SearchBar placeholder={props.placeholder} type={props.type} id={props.id} />
          </div>
  </>)
}
export default Inputs;
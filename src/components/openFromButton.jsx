import { Plus } from "lucide-react";
function OpenFromButton(props) {
    return (
        <button className="flex items-center bg-neutral-950 text-white text-sm px-2 py-1.5 gap-3 rounded hover:bg-neutral-600 transition-discrete" {...props}> <Plus size={20}/> {props.children}</button> 

    )
  }
export default OpenFromButton;
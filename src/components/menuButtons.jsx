import { Link } from "lucide-react";
import { useLocation } from "react-router-dom";
function MenuButtons(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  return <button className={`w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white ${ isActive ? 'bg-white' : 'bg-transparent'} rounded-sm`} {...props}>{props.children}</button>
  
}
export default MenuButtons;
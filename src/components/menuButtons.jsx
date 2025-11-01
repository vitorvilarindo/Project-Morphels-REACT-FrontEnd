import { Link } from "lucide-react";
import { useLocation } from "react-router-dom";
function MenuButtons(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  return <button to={props.to} isShowwing={props.isShowwing} className={`w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white ${ isActive || props.isShowwing ? 'bg-white' : 'bg-transparent'} rounded-sm`} {...props}>{props.children}</button>
  
}
export default MenuButtons;
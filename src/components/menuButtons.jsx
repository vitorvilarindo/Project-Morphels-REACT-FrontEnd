import { useLocation } from "react-router-dom";

function MenuButtons(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  return <button className={`w-full flex h-10 gap-3 text-sm justify-center items-center py-1 hover:bg-bg-secondary-color ${ isActive ? 'bg-bg-secondary-color' : 'bg-transparent'} md:  hover: rounded-sm`} {...props}>{props.children}</button>
  
}
export default MenuButtons;
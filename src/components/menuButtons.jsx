function MenuButtons(props) {
  return <button className='flex gap-3 text-sm items-center pl-15.5 pr-15.5 pt-1 pb-1 hover:bg-white focus:bg-white rounded-sm' {...props}>{props.children}</button>
  
}
export default MenuButtons;
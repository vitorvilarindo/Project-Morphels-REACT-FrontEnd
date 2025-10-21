function MenuButtons(props) {
  return <button className='w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white focus:bg-white rounded-sm' {...props}>{props.children}</button>
  
}
export default MenuButtons;
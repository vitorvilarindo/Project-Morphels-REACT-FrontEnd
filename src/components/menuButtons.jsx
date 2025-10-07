function MenuButtons(props) {
  return <li><button className='flex gap-3 pl-8 pr-8 pt-1 pb-1 hover:bg-white focus:bg-white rounded-full'>{props.children}</button></li>
  
}
export default MenuButtons;
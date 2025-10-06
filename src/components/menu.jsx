 import { ChartColumn, BadgeDollarSign, Receipt, FileText, Church } from 'lucide-react';
 import MenuButtons from './menuButtons.jsx';
 function Menu() {
  return (
    <div className='flex justify-center items-center mt-3'>
      <ul className='flex bg-gray-200 rounded-full items-center shadow-lg p-1'>
        <MenuButtons><ChartColumn />Dashboard </MenuButtons>
        <MenuButtons><BadgeDollarSign />About </MenuButtons>
        <MenuButtons><Receipt />Contact </MenuButtons>
        <MenuButtons><ChartColumn />Contact </MenuButtons>
        <MenuButtons><FileText />Contact </MenuButtons>
      </ul>
    </div>
  )
}
export default Menu;
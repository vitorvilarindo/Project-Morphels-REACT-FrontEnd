 import { ChartColumn, BadgeDollarSign, Receipt, FileText, Church } from 'lucide-react';
 import MenuButtons from './menuButtons.jsx';
 function Menu() {
  return (
    <div className='flex justify-center items-center mt-10'>
      <ul className=' flex bg-gray-200 rounded-full items-center shadow-lg p-1'>
        <MenuButtons><ChartColumn />Dashboard </MenuButtons>
        <MenuButtons><BadgeDollarSign />Receitas </MenuButtons>
        <MenuButtons><Receipt />Despesas </MenuButtons>
        <MenuButtons><ChartColumn />Gráficos </MenuButtons>
        <MenuButtons><FileText />Relatórios</MenuButtons>
      </ul>
    </div>
  )
}
export default Menu;
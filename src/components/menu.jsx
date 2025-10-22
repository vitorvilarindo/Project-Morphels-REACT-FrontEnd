 import { ChartColumn, BadgeDollarSign, Receipt, FileText, Church } from 'lucide-react';
 import MenuButtons from './menuButtons.jsx';
 import { useNavigate } from 'react-router-dom';
 function Menu() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center mt-7'>
      <ul className='w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg'>
        <li className='w-full '>
          <MenuButtons to='/main' onClick={() => navigate(`/main`)}><ChartColumn size={14}/>Dashboard </MenuButtons>
        </li >
        <li className='w-full'>
          <MenuButtons to='/revenues' onClick={() => navigate(`/revenues`)}><BadgeDollarSign size={14}/>Receitas </MenuButtons>
        </li>
        <li className='w-full'>
          <MenuButtons to='/expences' onClick={() => navigate(`/expences`)}><Receipt size={14}/>Despesas </MenuButtons>
        </li>
        <li className='w-full'>
          <MenuButtons to='/grafics' onClick={() => navigate(`/grafics`)}><ChartColumn size={14}/>Gráficos </MenuButtons>
        </li>
        <li className='w-full'>
          <MenuButtons to='/reports' onClick={() => navigate(`/reports`)}><FileText size={14}/>Relatórios</MenuButtons>
        </li>
      </ul>
    </div>
  )
}
export default Menu;
 import { ChartColumn, BadgeDollarSign, Receipt, FileText, Church } from 'lucide-react';
 import MenuButtons from './menuButtons.jsx';
 import { useNavigate } from 'react-router-dom';
 function Menu() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center mt-7'>
      <ul className='w-[55vw] justify-around flex bg-gray-200 rounded-sm items-center shadow-lg p-1'>
        <li>
          <MenuButtons onClick={() => navigate(`/`)}><ChartColumn size={14}/>Dashboard </MenuButtons>
        </li>
        <li>
          <MenuButtons onClick={() => navigate(`/revenues`)}><BadgeDollarSign size={14}/>Receitas </MenuButtons>
        </li>
        <li>
          <MenuButtons onClick={() => navigate(`/expences`)}><Receipt size={14}/>Despesas </MenuButtons>
        </li>
        <li>
          <MenuButtons onClick={() => navigate(`/grafics`)}><ChartColumn size={14}/>Gráficos </MenuButtons>
        </li>
        <li>
          <MenuButtons onClick={() => navigate(`/reports`)}><FileText size={14}/>Relatórios</MenuButtons>
        </li>
      </ul>
    </div>
  )
}
export default Menu;
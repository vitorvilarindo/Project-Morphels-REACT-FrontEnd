 import { ChartColumn, BadgeDollarSign, Receipt, FileText, Settings, Users } from 'lucide-react';
 import MenuButtons from './menuButtons.jsx';
 import { useNavigate } from 'react-router-dom';
 import { useState, useEffect } from 'react';
 import MainRequests from "../services/requests.js";

 const request = new MainRequests();
 function Menu() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  useEffect(() => {
      async function getPermission() {
          const response = await request.onGeneral("permissions");
          if (response.permissions.includes("fd5b8c57-3767-4fed-a9a4-77e896556ef5")) {
              setShow(true);
          }
      }
      getPermission().then()
  }, [])
  return (
      <div className='flex justify-center items-center mt-7'>
          <ul className='w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg'>
              <li className='w-full '>
                  <MenuButtons to='/main' onClick={() => navigate(`/main`)}><ChartColumn size={14}/>Dashboard
                  </MenuButtons>
              </li>
              <li className='w-full'>
                  <MenuButtons to='/revenues' onClick={() => navigate(`/revenues`)}><BadgeDollarSign size={14}/>Receitas
                  </MenuButtons>
              </li>
              <li className='w-full'>
                  <MenuButtons to='/expences' onClick={() => navigate(`/expences`)}><Receipt size={14}/>Despesas
                  </MenuButtons>
              </li>
              <li className='w-full'>
                  <MenuButtons to='/register' onClick={() => navigate(`/register`)}><Users size={14}/>Register
                  </MenuButtons>
              </li>
              <li className='w-full'>
                  <MenuButtons to='/reports' onClick={() => navigate(`/reports`)}><FileText
                      size={14}/>Relatórios</MenuButtons>
              </li>
              {show && (
                  <li className='w-full'>
                      <MenuButtons to='/settings' onClick={() => navigate(`/settings`)}><Settings
                          size={14}/>Configurátions</MenuButtons>
                  </li>
              )}

          </ul>
      </div>
  )
}
export default Menu;
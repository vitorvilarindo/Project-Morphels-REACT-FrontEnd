import { ChartColumn, BadgeDollarSign, Receipt, FileText, Settings, Users, X } from 'lucide-react';
import MenuButtons from './menuButtons.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMenu } from "../context/menuContext.jsx";
import MainRequests from "../services/requests.js";

const request = new MainRequests();
function SideMenu() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const { isOpen, toggleMenu } = useMenu();

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
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-start justify-start mobile-only-block">
                    <div className="flex flex-col bg-gray-200 w-[70%] h-full rounded-lg shadow-lg space-y-4">
                        <section className="flex w-full items-center justify-between py-3">
                            <h2 className='text-2xl pl-3'>Menu de páginas</h2>
                            <button className="pr-3 hover:bg-white" onClick={toggleMenu}>
                                <X />
                            </button>
                        </section>
                        <ul className='w-full flex flex-col items-center'>
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
                </div>
            )}

        </>

    )
}
export default SideMenu;
import Menu from '../components/menu.jsx';
import Header from '../components/header.jsx';
import Balons from '../components/balons.jsx';
import Grafics from '../components/grafics.jsx';
import { BadgeDollarSign } from 'lucide-react';
import MainRequests from "../services/requests.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {MenuProvider} from "../context/menuContext.jsx";
import SideMenu from "../components/sideMenu.jsx";

const request = new MainRequests();

function Login () {
    const navigate = useNavigate();
    const [sumRevenues, setSumRevenues] = useState();
    const [sumExpenses, setSumExpenses] = useState();
  return (
    
    <div className='justify-center items-center h-[90vh] w-screen'>
        <MenuProvider>
            <Header/>
            <SideMenu/>
        </MenuProvider>
        <Menu/>

      <div className='flex justify-center'>
        <section className='flex mt-8 gap-3 flex-col w-[80vw] md:w-[55vw]'>
          <Balons title={'entradas'} value={sumRevenues} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
          <Balons title={'entradas'} value={sumExpenses} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
        </section>
      </div>
      <section className="flex justify-center m-auto w-[80vw] md:w-[55vw]">
        <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
      </section>
    </div>
  )}
  
export default Login
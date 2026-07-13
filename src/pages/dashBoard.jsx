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

const requests = new MainRequests();

function DashBoard () {
    const navigate = useNavigate();
    const [sumRevenues, setSumRevenues] = useState();
    const [sumExpenses, setSumExpenses] = useState();

    async function onGetFinanceData (){
        const start_date = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        const end_date = new Date()
        const finance_response = await requests.onPost(`dashboard`, [{start_date, end_date}]);

        console.log(finance_response.data);

        setSumExpenses(finance_response.data.expenses.sum_expenses);
        setSumRevenues(finance_response.data.revenues.sum_revenues);
    }

    useEffect(() => {
        onGetFinanceData().then();

    }, [])


  return (
    
    <div className='justify-center items-center h-[90vh] w-screen'>
        <MenuProvider>
            <Header/>
            <SideMenu/>
        </MenuProvider>
        <Menu/>

      <div className='flex justify-center'>
        <section className='flex flex-col mt-8 gap-3 w-[80vw] md:w-[55vw] md:flex-row'>
          <Balons title={'entradas'} value={sumRevenues} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
          <Balons title={'entradas'} value={sumExpenses} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
        </section>
      </div>
      <section className="flex justify-center m-auto w-[80vw] md:w-[55vw]">
        <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
      </section>
    </div>
  )}
  
export default DashBoard
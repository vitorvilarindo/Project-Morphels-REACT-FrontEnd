import Menu from '../components/menu.jsx';
import Header from '../components/header.jsx';
import Balons from '../components/balons.jsx';
import Grafics from '../components/grafics.jsx';
import { BadgeDollarSign } from 'lucide-react';
import MainRequests from "../services/requests.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const request = new MainRequests();

function Login () {
    const navigate = useNavigate();
    const [sumRevenues, setSumRevenues] = useState();
    const [sumExpenses, setSumExpenses] = useState();

    useEffect(() => {
        async function generalSum() {
            try {
                const response = await request.onGeneral("sum")
                setSumRevenues(response.revenues)
                setSumExpenses(response.expenses)
            }catch (error) {
                console.error("Erro ao generar perfil:", error)
            }
        }
        generalSum().then()
    },[])

  return (
    
    <div className='justify-center items-center h-[90vh] w-screen'>
      <Header />
      <Menu />

      <div className='flex justify-center'>
        <section className='flex w-[55vw] mt-8 gap-3'>
          <Balons title={'entradas'} value={sumRevenues} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
          <Balons title={'entradas'} value={sumExpenses} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
        </section>
      </div>
      <section className=" flex justify-center w-[55vw] m-auto">
        <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
      </section>
    </div>
  )}
  
export default Login
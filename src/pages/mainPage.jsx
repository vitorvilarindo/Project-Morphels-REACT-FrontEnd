import Menu from '../components/menu.jsx';
import Header from '../components/header.jsx';
import Balons from '../components/balons.jsx';
import Grafics from '../components/grafics.jsx';
import { BadgeDollarSign } from 'lucide-react';
import MainRequests from "../services/requests.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const request = new MainRequests();

function Login () {
    const navigate = useNavigate();

    useEffect(() => {
        async function verify() {
            try {
                const response = await request.onProfile("users")
                console.log(response)

                if (response !== 200) {
                    navigate("/")
                } else {
                    console.log("Profile was successfully logged in")
                }
            } catch (error) {
                console.error("Erro ao verificar perfil:", error)
                navigate("/")
            }
        }

        verify().then()
    }, [navigate])

  return (
    
    <div className='justify-center items-center h-[90vh] w-screen'>
      <Header />
      <Menu />

      <div className='flex justify-center'>
        <section className='flex w-[55vw] mt-8 gap-3'>
          <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
          <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
        </section>
      </div>
      <section className=" flex justify-center w-[55vw] m-auto">
        <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
      </section>
    </div>
  )}
  
export default Login
import Menu from './components/menu.jsx'
import Header from './components/header.jsx';
import Balons from './components/balons.jsx';
import Grafics from './components/grafics.jsx';
import { BadgeDollarSign, Loader } from 'lucide-react';
import { Church, Moon } from 'lucide-react';
import './App.css'

function App() {

  return (
    
    <div className='justify-center h-[90vh] w-screen'>
      <Header />
      <Menu />

      <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
      <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
      </div>
  )}

export default App

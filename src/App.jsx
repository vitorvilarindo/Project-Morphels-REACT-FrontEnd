import Menu from './components/menu.jsx'
import Header from './components/header.jsx';
import Balons from './components/balons.jsx';
import { BadgeDollarSign } from 'lucide-react';
import { Church, Moon } from 'lucide-react';
import './App.css'

function App() {

  return (
    
    <div className='justify-center h-[90vh] w-screen'>
      <Header />
      <Menu />
      <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
      </div>
  )}

export default App

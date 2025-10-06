import Menu from './components/menu.jsx'
import { Church, Moon } from 'lucide-react';
import './App.css'

function App() {

  return (
    
    <div className='justify-center h-[90vh] w-screen'>
      <div className='flex justify-evenly items-center'>
        <nav className='flex  items-center space-x-3 m-2'>
          <div className=''><Church size={32}/></div>
          <div className='flex flex-col items-baseline'>
            <h1 className='font-bold'>Sistema Financeiro</h1>
            <p>ADEB</p>
          </div>
        </nav>
        <nav>
          <Moon />
        </nav>
      </div>
      <hr className=' bg-gray-400 w-screen'/>
      <Menu />
      </div>
  )}

export default App

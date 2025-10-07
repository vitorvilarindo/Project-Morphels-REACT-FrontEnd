import { Church, Moon } from 'lucide-react'
function Header() {
  return (
    <>
      <div className='flex justify-evenly items-center'>
        <nav className='flex  items-center space-x-3 m-2'>
          <div className=''><Church size={32}/></div>
          <div className='flex flex-col items-baseline'>
            <h1 className='font-bold'>Sistema Financeiro</h1>
            <p>ADEB</p>
          </div>
        </nav>
        <button>
          <Moon size={18} />
        </button>
      </div>
      <hr className=' bg-gray-400 w-screen'/>
    </>
  )
}
export default Header;
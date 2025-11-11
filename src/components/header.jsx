import { Church, Moon } from 'lucide-react'
function Header() {
  return (
    <>
      <div className=' flex justify-center items-center border-b border-neutral-200 h-[6vh] w-sceen'>
        <section className='w-[55vw] flex justify-between'>
          <nav className='flex  items-center space-x-3 m-2'>
            <div className=''><Church size={32}/></div>
            <div className='flex flex-col items-baseline'>
              <h1 className='font-bold'>Sistema Financeiro</h1>
              <p className='text-sm text-gray-600'>ADEB</p>
            </div>
          </nav>
          <button>
            <Moon size={18} />
          </button>
        </section>
      </div>
    </>
  )
}
export default Header;
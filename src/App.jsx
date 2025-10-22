import './App.css'
import{ Church, Mail, Lock } from "lucide-react"
import SearchBar from './components/searchBar.jsx';
import AdebBackground from '../images/adebBackground.jpg'
// import { useNavigate } from 'react-router-dom';

function onCheckLogin() {
  // const navigate = useNavigate()
  // Função para checar login (a ser implementada)
}

function App() {
  
  return(
    <main className="flex flex-col justify-center items-center h-screen w-screen gap-4 bg-[url('../images/adebBackground.jpg')] bg-cover bg-center bg-black/30 bg-blend-darken">
      <div className="flex flex-col justify-center items-center bg-white backdrop-blur-md p-10 rounded-lg shadow-lg w-110 gap-4">
        <header className="flex flex-col justify-center items-center gap-2">
          <i className='bg-gray-100 p-4 rounded-full'>
            <Church  size={40}/>
          </i>
          <h1 className="text-center text-2xl mt-2 mb-2">Morphels</h1>
          <h3 className='text-sm text-gray-500'>Assembleia de Deus de Brasilia</h3>
          <h3 className='text-sm text-gray-500'>Faça login para acessar o painel</h3>
        </header>
        <form action={onCheckLogin} className='flex flex-col gap-4 w-80'>
          <section className='flex flex-col items-start w-full'>
            <label htmlFor="email" className='text-sm text-gray-950 mb-1'>Email</label>
            <article className='flex items-center w-full gap-1'>
              <Mail className='text-gray-500' size={16}/>
              <SearchBar placeholder="seu@email.com" type="email" id="email" required/>
            </article>
            <label htmlFor="password" className='text-sm text-gray-950 mb-1'>Senha</label>
            <article className='flex items-center w-full gap-1'>
              <Lock className='text-gray-500' size={16}/>
              <SearchBar placeholder="........" type="password" id="password" required/>
            </article>
          </section>
          <section className='flex flex-col w-full'>
            <article className='flex justify-between w-full mb-4 text-gray-950'>
              <div className='flex items-center'>
                <input type="checkbox" name="lembreme" id="lembreme"/>
                <label htmlFor="lembreme" className='text-sm text-gray-950 ml-2'>Lembre-me</label>
              </div>
              <a href="#" className='hover:underline'>Esqueci a senha</a>
            </article>
            <button type='submit' className='bg-gray-950 hover:bg-gray-800 text-white rounded-sm p-1'>Entrar</button>
          </section>
        </form>
      </div>
    </main>
  )
}
  

export default App

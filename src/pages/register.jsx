import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import MenuButtons from "../components/menuButtons.jsx";
 import { User, Building2 } from 'lucide-react';
import Grafics from "../components/grafics.jsx"
import { useState } from "react";

function Register() {
  const [showForm, setShowForm] = useState(false)

  const onShowForm = () => {
    setShowForm(!showForm)
  }

  return (
      <div className='justify-center h-[90vh] w-screen'>
        <Header />
        <Menu />
        <section className='flex justify-center items-center mt-7'>
          <ul className='w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg'>
            <li className='w-full'>
              <MenuButtons to='' isShowwing={showForm} onClick={onShowForm}><User size={14}/>Member </MenuButtons>
            </li>
            <li className='w-full '>
              <MenuButtons to='/main' onClick={onShowForm}><Building2 size={14}/>Empress </MenuButtons>
            </li >
          </ul>
        </section>

        {showForm ? (
          <h1>SLk comprensa muito ser progframador</h1>
        ) : (
          <h1>Slk ser progamador paga muito</h1>
        )}
      </div>
  )}
export default Register;
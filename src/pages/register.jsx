import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import MenuButtons from "../components/menuButtons.jsx";
import Balons from "../components/balons.jsx";
import Header2 from "../components/header2.jsx";
import OpenFromButton from "../components/openFromButton.jsx";
import SearchBar from "../components/searchBar.jsx";
import { User, Building2, BadgeDollarSign, Search, Trash2 } from 'lucide-react';
import { useState } from "react";

function Register() {
  const [showPage, setShowPage] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [Members, setMembers] = useState([{
    id: 1,
    name: "Um ser humano",
    cellPhone: "(61)99380-3557",
    dateBorn: "06/09/2008",
    pixKey: "071.257.761-08",
    typePixKey: "CPF"
  }])

  const onShowPage = () => {
    setShowPage(!showPage)
  }
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
              <MenuButtons to='' isShowwing={showPage} onClick={onShowPage}><User size={14}/>Member </MenuButtons>
            </li>
            <li className='w-full '>
              <MenuButtons to=''  onClick={onShowPage}><Building2 size={14}/>Empress </MenuButtons>
            </li >
          </ul>
        </section>

        {showPage ? (
          
          <main className="w-screen">
            <div className='flex justify-center'>
              <section className='flex w-[55vw] gap-3'>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<BadgeDollarSign />} color="green"/>
              </section>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center w-[55vw] mt-8 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                <section className="flex justify-between items-center">
                  <Header2
                    title={"Revenues Form"}
                    description={"Form to add new revenues"}
                  />
                  <div className="flex justify-center">
                    <OpenFromButton onClick={onShowForm}>{"New Revenue"}</OpenFromButton>
                  </div>
                </section>
                {showForm && (
                  <div className="bg-gray-50 p-3 rounded-sm border-1 border-gray-300 shadow-md">
                    <form  className="flex flex-col  space-y-3">
                      <section className="flex flex-col items-start">
                        <label htmlFor="member" className="text-xs">Member</label>
                        <SearchBar placeholder="Member" type="text" id="member" />
                      </section>
                      
                      <section className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="type" className="text-xs">Type</label>
                          <select id="type" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" >
                            <option value="">Select a category</option>
                            <option value="Dizimo">Dizimo</option>
                            <option value="Oferta">Oferta</option>
                            <option value="Doação">Doação</option>
                          </select>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="value" className="text-xs">Values</label>
                          <SearchBar placeholder="00,0" type="number"  id="value" />
                        </div>
                      </section >
                      <section className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="payment" className="text-xs">Payment</label>
                          <select id="payment" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" >
                            <option value="">Select a Payment</option>
                            <option value="Pix/Depósito">Pix/Depósito</option>
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="Cheque">Cheque</option>
                          </select>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="date" className="text-xs">Data</label>
                          <SearchBar placeholder="Enter category" type="date"  id="date" />
                        </div>
                      </section >
                    
                    
                      <div className="w-full flex flex-row mt-4 gap-4 ">
                            <button type="submit" className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit</button>
                            <button className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel</button>
                        </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center w-[55vw] mt-8 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                <Header2 title={"Registed Member"} description={""}/>
                <section  className="flex items-center gap-2">
                  <Search size={16} className="text-gray-500"/>
                  <SearchBar placeholder="Member" type="text" id="member"/>
                </section> 
                <section className="w-full rounded-lg border border-neutral-200">
                  <table className="w-full">
                    <thead className="">
                      <tr className="h-10 text-xs text-gray-900 text-left border-b border-b-neutral-200">
                        <th  className="px-2">Igreja</th>
                        <th >Igreja</th>
                        <th >Igreja</th>
                        <th >Igreja</th>
                        <th >Igreja</th>
                        <th className="text-right px-2">Igreja</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Members.map((member) => 
                      (<tr className="h-11 text-xs text-gray-900 text-left border-b border-b-neutral-200">
                        <td className="p-2">{member.name}</td>
                        <td>{member.cellPhone}</td>
                        <td>{member.dateBorn}</td>
                        <td><div className="inline-block border border-neutral-200 px-1 rounded-md">{member.typePixKey}</div></td>
                        <td>{member.pixKey}</td>
                        
                        <td><div className="pr-3 flex justify-end text-red-600">
                          <button>
                            <Trash2 size={18}/>
                          </button>
                        </div></td>
                      </tr> ))}
                      
                    </tbody>
                  </table>
                </section>
              </div>

            </div>
            
          </main>
        ) : (
          <h1>Slk ser progamador paga muito</h1>
        )}
      </div>
  )}
export default Register;
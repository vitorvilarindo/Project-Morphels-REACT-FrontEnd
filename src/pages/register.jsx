import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import MenuButtons from "../components/menuButtons.jsx";
import Balons from "../components/balons.jsx";
import Header2 from "../components/header2.jsx";
import OpenFromButton from "../components/openFromButton.jsx";
import SearchBar from "../components/searchBar.jsx";
import { User, Building2, BadgeDollarSign, Search, Trash2, Users, CreditCard, MapPin, Phone } from 'lucide-react';
import { useState } from "react";

function Register() {
  const [showPage, setShowPage] = useState(true)
  const [showForm1, setShowForm1] = useState(false)
  const [showForm2, setShowForm2] = useState(false)
  const [Members, setMembers] = useState([{
    id: 1,
    name: "Um ser humano",
    cellPhone: "(61)99380-3557",
    dateBorn: "06/09/2008",
    pixKey: "071.257.761-08",
    typePixKey: "CPF"
  }])

  return (
      <div className='justify-center h-[90vh] w-screen'>
        <Header />
        <Menu />
        <section className='flex justify-center items-center mt-7'>
          <ul className='w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg'>
            <li className='w-full'>
              <button onClick={() => setShowPage(true)} className={`w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white ${ showPage ? 'bg-white' : 'bg-transparent'} rounded-sm`}><User size={14}/>Member</button>
            </li>
            <li className='w-full '>
              <button onClick={() =>setShowPage(false)} className={`w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white ${ showPage ? 'bg-transparent' : 'bg-white' } rounded-sm`}><Building2 size={14}/>Empress</button>
            </li >
          </ul>
        </section>

        {showPage ? (
          
          <main className="w-screen">
            <div className='flex justify-center'>
              <section className='flex w-[55vw] gap-3'>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<Users size={16} />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<CreditCard size={16} />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<Users size={16} />} color="green"/>
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
                    <OpenFromButton onClick={() => setShowForm1(!showForm1)}>{showForm1? "Cancelar": "New Revenue"}</OpenFromButton>
                  </div>
                </section>
                {showForm1 && (
                  <div className="">
                    <form  className="flex flex-col  space-y-3">
                      <section className="flex flex-col items-start space-y-1">
                        <label htmlFor="member" className="text-xs">Complete name *</label>
                        <SearchBar placeholder="Name" type="text" id="member" />
                      </section>
                      
                      <section className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="cellphone" className="text-xs">Cellphone</label>
                          <SearchBar placeholder="(61) 91234-5678" type="number" id="cellphone" />
                        
                           
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="date" className="text-xs">Data</label>
                          <SearchBar placeholder="Enter category" type="date"  id="date" />
                        </div>
                        
                      </section >
                      <section className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="pixType" className="text-xs">Pix type</label>
                          <select id="pixType" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" >
                            <option value="CPF">CPF</option>
                            <option value="CNPJ">CNPJ</option>
                            <option value="E-mail">E-mail</option>
                            <option value="Telefone">Telefone</option>
                            <option value="aleatoryKey">Aleatory Key</option>
                          </select>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <label htmlFor="value" className="text-xs">Pix Key</label>
                          <SearchBar placeholder="Write the Pix key." type="number"  id="value" />
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
          <main className="w-screen">
            <div className='flex justify-center'>
              <section className='flex w-[55vw] gap-3'>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<Users size={16} />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<CreditCard size={16} />} color="green"/>
                <Balons title={'entradas'} value={'2000.00'} description={'total de entradas'} icon={<Users size={16} />} color="green"/>
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
                    <OpenFromButton onClick={() => setShowForm2(!showForm2)}>{showForm2? "Cancelar": "New Revenue"}</OpenFromButton>
                  </div>
                </section>
                {showForm2 && (
                  <div className="mt-4">
                    
                    <form  className="flex flex-col  space-y-3">
                      <article className="space-y-3">
                        <section className="flex gap-2 items-center mb-4">
                          <Building2 size={21} />
                          <h2 className="text-sm font-bold">Empress's Data</h2>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[70%] space-y-2">
                            <label htmlFor="member" className="text-xs">CNPJ *</label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="00.000.000/0000-00"/>
                          </div>
                          <div className="flex flex-col items-start w-[30%] space-y-2">
                            <button className="w-[100%] justify-center gap-3 flex flex-row text-xs bg-gray-100 hover:bg-gray-200 border rounded-md border-gray-100 px-2 py-2"><Search size={16}/> <div>Buscar CNPJ</div></button>
                          </div>
                        </section>
                        
                        <section className="flex flex-row gap-4 w-full">
                          <div className="flex flex-col items-start w-full space-y-1">
                            <label htmlFor="cellphone" className="text-xs">Razão Social *</label>
                            <SearchBar placeholder="Empresa ABC LTDA" type="text" id="cellphone" />
                          </div>
                          <div className="flex flex-col items-start w-full space-y-1">
                            <label htmlFor="date" className="text-xs">Nome Fantasia</label>
                            <SearchBar placeholder="ABC Empresa" type="text"  id="date" />
                          </div>
                        
                        </section >
                        <section className="flex flex-row gap-4 w-full">
                          <div className="flex flex-col items-start w-full space-y-1">
                            <label htmlFor="cellphone" className="text-xs">Inscrição Estadual</label>
                            <SearchBar placeholder="000.000.000.000" type="text" id="cellphone" />
                          </div>
                          <div className="flex flex-col items-start w-full space-y-1">
                            <label htmlFor="date" className="text-xs">Inscrição Munincipal</label>
                            <SearchBar placeholder="000000-0" type="text"  id="date" />
                          </div>
                        
                        </section >
                        <section className="flex flex-row gap-4 w-full">
                          <div className="flex flex-col items-start w-full">
                            <label htmlFor="value" className="text-xs">Data de Abertura</label>
                            <SearchBar placeholder="Write the Pix key." type="date"  id="value" />
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <label htmlFor="pixType" className="text-xs">Situation</label>
                            <select id="pixType" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" >
                              <option value="Active">Active</option>
                              <option value="Suspence">Suspence</option>
                              <option value="Inapta">Inapta</option>
                              <option value="Baixada">Baixada</option>
                            </select>
                          </div>
                        </section >
                      </article>
                      <article className="space-y-3">
                        <section className="flex gap-2 items-center mb-4 mt-4">
                          <MapPin size={21} />
                          <h2 className="text-sm font-bold">Empress's Data</h2>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[20%] space-y-2">
                            <label htmlFor="member" className="text-xs">CEP </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="00.000.000/0000-00"/>
                          </div>
                          <div className="flex flex-col items-start w-[80%] space-y-2">
                            <label htmlFor="member" className="text-xs">Logadouro </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Rua, Avenida, etc"/>
                          </div>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[20%] space-y-2">
                            <label htmlFor="member" className="text-xs">Nùmero </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="123"/>
                          </div>
                          <div className="flex flex-col items-start w-[80%] space-y-2">
                            <label htmlFor="member" className="text-xs">Complemento </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Sala, Andar, etc"/>
                          </div>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[50%] space-y-2">
                            <label htmlFor="member" className="text-xs">Bairro </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Centro"/>
                          </div>
                          <div className="flex flex-col items-start w-[25%] space-y-2">
                            <label htmlFor="member" className="text-xs">Cidade </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="São Paulo"/>
                          </div>
                          <div className="flex flex-col items-start w-[25%] space-y-2">
                            <label htmlFor="member" className="text-xs">UF </label>
                            <select className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Sala, Andar, etc">
                              <option value="ac">AC</option>
                              <option value="al">AL</option>
                              <option value="ap">AP</option>
                              <option value="am">AM</option>
                              <option value="ba">BA</option>
                              <option value="ce">CE</option>
                              <option value="df">DF</option>
                              <option value="es">ES</option>
                              <option value="go">GO</option>
                              <option value="ma">MA</option>
                              <option value="mt">MT</option>
                              <option value="ms">MS</option>
                              <option value="mg">MG</option>
                              <option value="pa">PA</option>
                              <option value="pb">PB</option>
                              <option value="pr">PR</option>
                              <option value="pe">PE</option>
                              <option value="pi">PI</option>
                              <option value="rj">RJ</option>
                              <option value="rn">RN</option>
                              <option value="rs">RS</option>
                              <option value="ro">RO</option>
                              <option value="rr">RR</option>
                              <option value="sc">SC</option>
                              <option value="sp">SP</option>
                              <option value="se">SE</option>
                              <option value="to">TO</option>
                            </select>
                          </div>
                        </section>
                      </article>
                      <article className="space-y-3">
                        <section className="flex gap-2 items-center mb-4 mt-4">
                          <Phone size={21} />
                          <h2 className="text-sm font-bold">Contact</h2>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[50%] space-y-2">
                            <label htmlFor="member" className="text-xs">Telefone * </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="(61) 91234-5678"/>
                          </div>
                          <div className="flex flex-col items-start w-[50%] space-y-2">
                            <label htmlFor="member" className="text-xs">E-mail </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Contato@empresa.com"/>
                          </div>
                        </section>

                      </article>
                      <article className="space-y-3">
                        <section className="flex gap-2 items-center mb-4 mt-4">
                          <Building2 size={21} />
                          <h2 className="text-sm font-bold">Atividade Econômica</h2>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[20%] space-y-2">
                            <label htmlFor="member" className="text-xs">CNAE </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="0000-0/00"/>
                          </div>
                          <div className="flex flex-col items-start w-[80%] space-y-2">
                            <label htmlFor="member" className="text-xs">Descrição de Atividade </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Ex: Serviços de manutenção e reparação"/>
                          </div>
                        </section>
                        
                      </article>
                      <article className="space-y-3">
                        <section className="flex gap-2 items-center mb-4 mt-4">
                          <CreditCard size={21} />
                          <h2 className="text-sm font-bold">Dados para Pagamento</h2>
                        </section>
                        <section className="flex flex-row gap-4 w-full items-end">
                          <div className="flex flex-col items-start w-[20%] space-y-2">
                            <label htmlFor="member" className="text-xs">CNAE </label>
                            <select className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="0000-0/00">
                              <option value="CPF">CPF</option>
                              <option value="CNPJ">CNPJ</option>
                              <option value="E-mail">E-mail</option>
                              <option value="Telefone">Telefone</option>
                              <option value="aleatoryKey">Aleatory Key</option>
                            </select>
                          </div>
                          <div className="flex flex-col items-start w-[80%] space-y-2">
                            <label htmlFor="member" className="text-xs">Descrição de Atividade </label>
                            <input className="w-[100%] text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2" type="text" id="member" placeholder="Ex: Serviços de manutenção e reparação"/>
                          </div>
                        </section>
                        
                      </article>
                    
                      <div className="w-full flex flex-row mt-4 gap-4 ">
                            <button type="submit" className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit</button>
                            <button className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Address</button>
                      </div>
                    </form>
                  </div>)}

              </div>
            </div>   
          </main>
        )}
      </div>
  )}
export default Register;
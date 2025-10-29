import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import Table from "../components/table.jsx";
import { useState, Fragment } from "react";
import Header2 from "../components/header2.jsx";
import FormButtons from "../components/formButtons.jsx";
import OpenFromButton from "../components/openFromButton.jsx";
import DataBalons from "../components/dadaBalons.jsx";
import SearchArea from "../components/searchArea.jsx";
import SearchBar from "../components/searchBar.jsx";
import { Listbox, Transition } from '@headlessui/react'

function ExpencesPage() {
  
  const [showForma, setShowForma] = useState(false);
  const [expences, setExpences] = useState([{
    id: 0,
    category: 'Utilidades',
    date: '14/10/2025',
    title: 'Alguma utilidade',
    value: 2000.00,
    description: 'Utilidade de alguem',
    color_value: "red",
    color_category: "blue"
  },
  {
    id: 1,
    category: 'Alimentação',
    date: '15/10/2025',
    title: 'Compra de comida',
    value: 500.00,
    description: 'Compra no supermercado',
    color_value: "red",
    color_category: "yellow"
  },
  {
    id: 2,
    category: 'Transporte',
    date: '16/10/2025',
    title: 'Combustível',
    value: 1500.00,
    description: 'Abastecimento do carro',
    color_value: "red",
    color_category: "blue"
  }  
]);

  const onShowForm =  () => {
    setShowForma(!showForma);
    console.log("Button clicked! Show form:", showForma);
  }

  return (
    <div className="justify-center h-[90vh] w-screen">
      <Header />
      <Menu />
      
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[55vw] mt-8 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
          <section className="flex justify-between items-center">
            <Header2
              title={"Expences Form"}
              description={"Form to add new expences"}
            />
            <div className="flex justify-center">
              <OpenFromButton onClick={onShowForm}>{"New Expences"}</OpenFromButton>
            </div>
          </section>
          <SearchArea placeholder={"Search by description or supplier..."} />
          {showForma && (
            <div className="bg-gray-50 p-3 rounded-sm border-1 border-gray-300">
              <form className="flex flex-col  space-y-3">
                <section className="flex flex-col items-start">
                  <label htmlFor="supplier" className="text-xs">Supplier/recepient</label>
                  <SearchBar placeholder="Supplier/recepient" type="text" id="supplier"/>
                </section>
                
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="category" className="text-xs">Category</label>
                    <select id="category" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2">
                      <option value="dizimo" >Manutenção</option>
                      <option value="oferta">Salários</option>
                      <option value="outros">Projetos</option>
                      <option value="outros">Utilidades</option>
                      <option value="outros">Eventos</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="value" className="text-xs">Value</label>
                    <SearchBar placeholder="00,0" type="number"  id="values"/>
                  </div>
                </section >
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="category" className="text-xs">Category</label>
                    <select id="category" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2">
                      <option value="dizimo" >Pix/Transferência</option>
                      <option value="oferta">Dinheiro</option>
                      <option value="outros">Check</option>
               
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="data" className="text-xs">Data</label>
                    <SearchBar placeholder="Enter category" type="date"  id="data"/>
                  </div>
                </section >
              
              
                <div className="w-full flex flex-row mt-4 gap-4 ">
                      <button className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit</button>
                      <button className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel</button>
                  </div>
              </form>
            </div>
          )}
          
          {expences.map((data) => (
            <DataBalons
              key={data.id}
              category={data.category}
              date={data.date}
              title={data.title}
              value={data.value}
              description={data.description}
              color_value={data.color_value}
              color_category={data.color_category}
            />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExpencesPage;
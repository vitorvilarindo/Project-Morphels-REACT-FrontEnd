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

function RevenuesPage() {
  const [showForma, setShowForma] = useState(false);
  const [revenues, setRevenues] = useState([{
    id: 0,
    category: 'Dizimo',
    date: '14/10/2025',
    title: 'Dizimo de Alguem',
    value: 2000.00,
    description: 'Dizimo de alguem',
    color_value: "green",
    color_category: "blue"
  },
  {
    id: 1,
    category: 'Oferta',
    date: '15/10/2025',
    title: 'Oferta de Alguem',
    value: 500.00,
    description: 'Oferta de alguem',
    color_value: "green",
    color_category: "yellow"
  },
  {
    id: 2,
    category: 'Dizimo',
    date: '16/10/2025',
    title: 'Dizimo de Outra Pessoa',
    value: 1500.00,
    description: 'Dizimo de outra pessoa',
    color_value: "green",
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
              title={"Revenues Form"}
              description={"Form to add new revenues"}
            />
            <div className="flex justify-center">
              <OpenFromButton onClick={onShowForm}>{"New Revenue"}</OpenFromButton>
            </div>
          </section>
          <SearchArea placeholder={"Search by description or member..."} />
          {showForma && (
            <div className="bg-gray-50 p-3 rounded-sm border-1 border-gray-300">
              <form className="flex flex-col  space-y-3">
                <section className="flex flex-col items-start">
                  <label htmlFor="member" className="text-xs">Member</label>
                  <SearchBar placeholder="Member" type="text" id="member"/>
                </section>
                
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="type" className="text-xs">Type</label>
                    <select id="type" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2">
                      <option value="dizimo" >Dizimo</option>
                      <option value="oferta">Oferta</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="value" className="text-xs">Values</label>
                    <SearchBar placeholder="00,0" type="number"  id="values"/>
                  </div>
                </section >
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="description" className="text-xs">Description</label>
                    <SearchBar placeholder="Enter value" type="text" id="description"/>
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
          
          {revenues.map((data) => (
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

export default RevenuesPage;

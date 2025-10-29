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
  const [member, setMember] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState('');
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState("");
  const [revenues, setRevenues] = useState([{
    id: 0,
    type: 'Dizimo',
    date: '14/10/2025',
    member: 'Dizimo de Alguem',
    value: 2000.00,
    payment: 'Cheque',
    color_value: "green",
    color_category: "blue"
  },
  {
    id: 1,
    type: 'Oferta',
    date: '15/10/2025',
    member: 'Oferta de Alguem',
    value: 500.00,
    payment: 'Dinheiro',
    color_value: "green",
    color_category: "green"
  },
  {
    id: 2,
    type: 'Dizimo',
    date: '16/10/2025',
    member: 'Dizimo de Outra Pessoa',
    value: 1500.00,
    payment: 'Pix/Depósito',
    color_value: "green",
    color_category: "blue"
  }
  ]);

  const onShowForm =  () => {
    setShowForma(!showForma);
    console.log("Button clicked! Show form:", showForma);
  }

  function onDeleteRevenue(id) {
    const updatedRevenues = revenues.filter((revenue) => revenue.id !== id);
    setRevenues(updatedRevenues);
  }

  function onAddRevenue(member, type, value, payment, date) {
    let color_category = ""
    if (type == 'Dizimo'){
      color_category = "blue"
    }else if (type == 'Oferta'){
      color_category = "green"
    }else{
      color_category = "purple"
    }
    const newRevenue = {
      id: revenues.length + 1,
      type,
      date,
      member,
      value,
      payment,
      color_value: "green",
      color_category
    }
    setRevenues([...revenues, newRevenue]);
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
            <div className="bg-gray-50 p-3 rounded-sm border-1 border-gray-300 shadow-md">
              <form action={() => onAddRevenue(member, type, value, payment, date)} className="flex flex-col  space-y-3">
                <section className="flex flex-col items-start">
                  <label htmlFor="member" className="text-xs">Member</label>
                  <SearchBar placeholder="Member" type="text" id="member" value={member} onChange={(event) => setMember(event.target.value)}/>
                </section>
                
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="type" className="text-xs">Type</label>
                    <select id="type" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" value={type} onChange={(event) => setType(event.target.value)}>
                      <option value="">Select a category</option>
                      <option value="Dizimo">Dizimo</option>
                      <option value="Oferta">Oferta</option>
                      <option value="Doação">Doação</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="value" className="text-xs">Values</label>
                    <SearchBar placeholder="00,0" type="number"  id="value" value={value} onChange={(event) => setValue(event.target.value)}/>
                  </div>
                </section >
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="payment" className="text-xs">Payment</label>
                    <select id="payment" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" value={payment} onChange={(event) => setPayment(event.target.value)}>
                      <option value="">Select a Payment</option>
                      <option value="Pix/Depósito">Pix/Depósito</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="date" className="text-xs">Data</label>
                    <SearchBar placeholder="Enter category" type="date"  id="date" value={date} onChange={(event) => setDate(event.target.value)}/>
                  </div>
                </section >
              
              
                <div className="w-full flex flex-row mt-4 gap-4 ">
                      <button type="submit" className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit</button>
                      <button className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel</button>
                  </div>
              </form>
            </div>
          )}
          
          {revenues.map((data) => (
            <DataBalons
              key={data.id}
              type={data.type}
              date={data.date}
              title={data.member}
              value={data.value}
              payment={data.payment}
              color_value={data.color_value}
              color_category={data.color_category}
              onDelete={() => onDeleteRevenue(data.id)}
            />
            ))}
        </div>
      </div>
    </div>
  );
}

export default RevenuesPage;

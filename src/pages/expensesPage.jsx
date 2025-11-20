import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import { useState, useEffect } from "react";
import Header2 from "../components/header2.jsx";
import OpenFromButton from "../components/openFromButton.jsx";
import DataBalons from "../components/dadaBalons.jsx";
import SearchArea from "../components/searchArea.jsx";
import SearchBar from "../components/searchBar.jsx";
import api from "../services/api.js";
import { useForm } from "react-hook-form";
import ModalExpenses from "../components/modalExpences.jsx";

function ExpensesPage() {
  
  const [showForma, setShowForma] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [expenses, setExpences] = useState([]);

  const { register, handleSubmit } = useForm();

  const onShowForm =  () => {
    setShowForma(!showForma);

  }
  async function onGetExpences(){
    const response =  await api.get("/expenses");
    setExpences (response.data);
  }

  useEffect(() => {
      onGetExpences();
    }, []);

  async function onAddExpence(data) {
    console.log(data);
    await api.post("/expenses", data);
    onGetExpences();
  }
  async function onDeleteExpence(id){
    await api.delete(`/expenses/${id}`);
    onGetExpences();
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
            <div className="bg-gray-50 p-3 rounded-sm border border-gray-300">
              <form action={() => handleSubmit(onAddExpence)()} className="flex flex-col  space-y-3">
                <section className="flex flex-col items-start">
                  <label htmlFor="Title" className="text-xs">Title</label>
                  <SearchBar placeholder="Title" type="text" id="Title" {...register('title')} />
                </section>
                
                
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="type" className="text-xs">Category</label>
                    <select id="type" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register('category')}  >
                      <option value="">Select a category</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Salários">Salários</option>
                      <option value="Projetos">Projetos</option>
                      <option value="Utilidades">Utilidades</option>
                      <option value="Eventos">Eventos</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="value" className="text-xs">Value</label>
                    <SearchBar placeholder="00,0" type="number"  id="values" {...register('value')}  />
                  </div>
                </section >
                <section className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="payment" className="text-xs">Payment</label>
                    <select id="payment" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register('payment')}  >
                      <option value=''>Select a payment</option>
                      <option value="Pix/Transferência" >Pix/Transferência</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Check">Check</option>
               
                    </select>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="date" className="text-xs">Data</label>
                    <SearchBar placeholder="Enter category" type="date"  id="date" {...register('date')}  />
                  </div>
                </section >
                <section className="flex flex-col items-start">
                  <label htmlFor="beneficiary" className="text-xs">Supplier/recepient</label>
                  <SearchBar placeholder="Supplier/recepient" type="text" id="beneficiary" {...register('beneficiary')} />
                </section>
              
              
                <div className="w-full flex flex-row mt-4 gap-4 ">
                      <button className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit</button>
                      <button className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel</button>
                  </div>
              </form>
            </div>
          )}
          
          {expenses.map((data) => (
            <DataBalons
              key={data.id}
              type={data.category}
              date={data.date}
              title={data.title}
              value={data.value}
              payment={data.beneficiary}
              color_value={"green"}
              showEditForm={() => {
                setShowEditForm(true);
                setEditData(data);
              }}
              onDelete={() => onDeleteExpence(data.id)}
            />
          ))}
            {showEditForm && <ModalExpenses onGetExpenses={() => onGetExpences()} onHideForm={() => setShowEditForm(!showEditForm)} complete={editData}/>}
        </div>
      </div>
    </div>
  );
}

export default ExpensesPage;
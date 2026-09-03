import api from '../services/api.js';
import { useForm } from 'react-hook-form';
import SearchBar from './searchBar.jsx';
import Header2 from './header2.jsx';
import Select from "./select.jsx";

function ModalExpenses({complete, onHideForm, onGetExpenses}) {
  const formatedData = complete ? {
    ...complete,
    date: complete.date.split('T')[0],
  } : complete;

  const { register, handleSubmit} = useForm({
    values: formatedData
  });


    async function onEditExpence(data) {
      console.log(data);
      await api.put(`/expenses/${complete.id}`, data)
      onGetExpenses()
      onHideForm()
    }
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-bg-secondary-color w-[80vw] p-6 rounded-lg shadow-lg space-y-4 md:w-[55%]">
        <Header2
              title={"Expenses put Form"}
              description={"Form to edit expenses"}
        />
        <form action={() => handleSubmit(onEditExpence)()} className="flex flex-col  space-y-3">
          <section className="flex flex-col items-start">
            <label htmlFor="Title" className="text-xs">Title</label>
            <SearchBar placeholder="Title" type="text" id="Title" {...register('title')}/>
          </section>
          
          
          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <Select id={"type"} register={{...register("type")}} title={"Type"} options={[
                {index:"", title:"Selecione uma opção"},
                {index:"manutencao", title:"Manutencao"},
                {index:"salario", title:"Salários"},
                {index:"projetos", title:"Projetos"},
                {index:"utilidades", title:"Utilidades"},
                {index:"eventos", title:"Eventos"},
                {index:"outros", title:"Outros"}
              ]} />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="value" className="text-xs">Value</label>
              <SearchBar placeholder="00,0" type="number" step="0.01" id="values" {...register('value')}/>
            </div>
          </section >
          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <Select id={"payment"} register={{...register("payment")}} title={"Payment"} options={[
                {index:"", title: "Selecione uma opção"},
                {index:"pix_deposito", title: "Pix/Depósito"},
                {index:"dinheiro", title: "Dinheiro"},
                {index:"cheque", title: "Cheque"}
              ]} />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="date" className="text-xs">Data</label>
              <SearchBar placeholder="Enter category" type="date"  id="date" {...register('date')}  />
            </div>
          </section >
          <section className="flex flex-col items-start">
            <label htmlFor="beneficiary" className="text-xs">Supplier/recepient</label>
            <SearchBar placeholder="Supplier/recepient" type="text" id="beneficiary" {...register('beneficiary')}/>
          </section>
        
        
          <div className="w-full flex flex-row mt-4 gap-4 ">
            <button
              type="submit"
              className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete"
            >
              Submit
            </button>
            <button
              onClick={onHideForm}
              className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalExpenses;

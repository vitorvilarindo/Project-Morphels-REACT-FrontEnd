import api from '../services/api.js';
import { useForm } from 'react-hook-form';
import SearchBar from './searchBar.jsx';
import Header2 from './header2.jsx';

function ModalExpenses({complete, onHideForm, onGetExpenses}) {
  const { register, handleSubmit} = useForm();

    async function onEditExpence(data) {
      console.log(data);
      await api.put(`/expenses/${complete.id}`, data)
      onGetExpenses()
      onHideForm()
    }
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-white w-[50%] lg:w[25%] p-6 rounded-lg shadow-lg space-y-4">
        <Header2
              title={"Revenues put Form"}
              description={"Form to edit revenues"}
        />
        <form action={() => handleSubmit(onEditExpence)()} className="flex flex-col  space-y-3">
          <section className="flex flex-col items-start">
            <label htmlFor="Title" className="text-xs">Title</label>
            <SearchBar placeholder="Title" type="text" id="Title" {...register('title')} defaultValue={complete.title} />
          </section>
          
          
          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="type" className="text-xs">Category</label>
              <select id="type" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register('category')} defaultValue={complete.category} >
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
              <SearchBar placeholder="00,0" type="number"  id="values" {...register('value')} defaultValue={complete.value} />
            </div>
          </section >
          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="payment" className="text-xs">Payment</label>
              <select id="payment" className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register('payment')} defaultValue={complete.payment} >
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
            <SearchBar placeholder="Supplier/recepient" type="text" id="beneficiary" {...register('beneficiary')} defaultValue={complete.beneficiary} />
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

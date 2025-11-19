import { useForm } from "react-hook-form";
import api from "../services/api.js";
import SearchBar from "./searchBar.jsx";
import Header2 from "./header2.jsx";

function ModalRevenues({ complete, onHideForm, onGetRevenues }) {
  const { register, handleSubmit } = useForm();

  async function onEditRevenue(data) {
    await api.put(`/revenues/${complete.id}`, data);
    onGetRevenues();
  }
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-white w-[50%] lg:w[25%] p-6 rounded-lg shadow-lg space-y-4">
        <Header2
          title={"Revenues put Form"}
          description={"Form to edit revenues"}
        />
        <form
          action={() => handleSubmit(onEditRevenue)()}
          className="flex flex-col  space-y-3"
        >
          <section className="flex flex-col items-start">
            <label htmlFor="member" className="text-xs">
              Member
            </label>
            <SearchBar
              placeholder="Member"
              type="text"
              id="member"
              {...register("member")}
              defaultValue={complete.member}
            />
          </section>

          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="type" className="text-xs">
                Type
              </label>
              <select
                id="type"
                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2"
                {...register("type")}
                defaultValue={complete.type}
              >
                <option value="">Select a category</option>
                <option value="Dizimo">Dizimo</option>
                <option value="Oferta">Oferta</option>
                <option value="Doação">Doação</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="value" className="text-xs">
                Values
              </label>
              <SearchBar
                placeholder="00,0"
                type="number"
                id="value"
                {...register("value")}
                defaultValue={complete.value}
              />
            </div>
          </section>
          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="payment" className="text-xs">
                Payment
              </label>
              <select
                id="payment"
                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2"
                {...register("payment")}
                defaultValue={complete.payment}
              >
                <option value="">Select a Payment</option>
                <option value="Pix/Depósito">Pix/Depósito</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="date" className="text-xs">
                Data
              </label>
              <SearchBar type="date" id="date" {...register("date")} />
            </div>
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

export default ModalRevenues;

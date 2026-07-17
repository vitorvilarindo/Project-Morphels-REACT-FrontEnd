import { useForm } from "react-hook-form";
import api from "../services/api.js";
import SearchBar from "./searchBar.jsx";
import Header2 from "./header2.jsx";
import Select from "./select.jsx";

function ModalRevenues({ complete, onHideForm, onGetRevenues }) {
  const formatedData = complete ? {
    ...complete,
    date: complete.date?.split("T")[0],
  } : complete;

  const { register, handleSubmit } = useForm({
    values: formatedData
  });

  console.log(complete)

  async function onEditRevenue(data) {
    await api.put(`/revenues/${complete.id}`, data);
    onGetRevenues();
    onHideForm();
  }
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-bg-secondary-color p-6 rounded-lg shadow-lg space-y-4 w-[80vw] md:w-[55vw]">
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
            />
          </section>

          <section className="flex flex-row gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <Select id={"type"} register={{...register("type")}} title={"Type"} options={[
                {index:"", title: "Selecione uma opção"},
                {index:"doação", title: "Doação"},
                {index:"contribuicao_regular", title: "Contribuição Regular"},
                {index:"oferta_especial", title: "Oferta Especial"},
                {index:"subvencao", title: "Subvenção/Subsídio"},
                {index:"patrocinio", title: "Patrocínio"},
                {index:"venda_serviço", title: "Venda/Serviço"},
                {index:"mensalidade", title: "Mensalidade"},
                {index:"rendimento_financeiro", title: "Rendimento financeiro"},
                {index:"outros", title: "Outros"},

              ]} />
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
              />
            </div>
          </section>
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

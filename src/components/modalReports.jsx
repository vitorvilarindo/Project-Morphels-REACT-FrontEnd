import { useForm } from "react-hook-form";
import SearchBar from "./searchBar.jsx";
import Header2 from "./header2.jsx";
import Inputs from "./inputs.jsx";
import MainRequests from "../services/requests.js";

const request = new MainRequests()

function ModalReports({ onHideForm, onGetRevenues }) {
    const { register, handleSubmit } = useForm({
        defaultValues:{
            options: {
                resume: false,
                revenues: false,
                expenses: false
            }
        }
        }
    );

    async function onPostReportPreset(data) {
        await request.onRepost("setReportPreset", data)
    }


    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col bg-white w-[50%] lg:w-[30%] p-6 rounded-lg shadow-lg space-y-4">
                <Header2
                    title={"Create new report"}
                    description={"Form to edit revenues"}
                />
                <form
                    action={() => handleSubmit(onPostReportPreset)()}
                    className="flex flex-col  space-y-3"
                >
                    <div className="flex flex-col items-start rounded-lg border border-neutral-200 p-3 gap-3">
                        <h1 className={"text-xl bold mb-2"}>Basic Information's</h1>
                        <section className="flex flex-col w-full items-start gap-1">
                            <label htmlFor="member" className="text-xs ">
                                Report´s title
                            </label>
                            <SearchBar
                                placeholder="Ex: Relatório Mensal - Janeiro 2025"
                                type="text"
                                id="member"
                                {...register("title")}
                            />
                        </section>
                        <section className="flex flex-col w-full items-start gap-1">
                            <label htmlFor="type" className="text-xs">
                                Type
                            </label>
                            <select
                                id="type"
                                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2"
                                {...register("type")}
                            >
                                <option value="">Select a category</option>
                                <option value="Mensal">Mensal</option>
                                <option value="Trimestral">Trimestral</option>
                                <option value="Semestral">Semestral</option>
                                <option value="Anual">Anual</option>
                                <option value="Cutomizado">Cutomizado</option>
                            </select>
                        </section>
                    </div>

                    <div className="flex flex-col items-start rounded-lg border border-neutral-200 p-3 gap-3">
                        <h1 className={"text-xl bold mb-2"}>Period</h1>
                        <section className="flex flex-col w-full items-start gap-1">
                            <label htmlFor="start_date" className="text-xs ">
                                Start´s date
                            </label>
                            <Inputs id="start_date" type="date"
                                    register={{...register("star_date")}}></Inputs>
                        </section>
                        <section className="flex flex-col w-full items-start gap-1">
                            <label htmlFor="end_date" className="text-xs">
                                Type
                            </label>
                            <Inputs id="end_date" type="date"
                                    register={{...register("end_date")}}></Inputs>
                        </section>
                    </div>
                    <div className="flex flex-col items-start rounded-lg border border-neutral-200 p-3 gap-3">
                        <h1 className={"text-xl bold mb-2"}>Sections to include</h1>
                        <section className={"flex items-center w-full  gap-1"}>
                            <input type="checkbox" checked={true} {...register("options.resume")}/>
                            <p className={"text-xs"}>Resumo financeiro (totais de receitas, despesas e saldo)</p>
                        </section>
                        <section className={"flex items-center w-full  gap-1"}>
                            <input type="checkbox" checked={true} {...register("options.revenues")}/>
                            <p className={"text-xs"}>Detalhamento de receitas (lista completa de receitas do periodo)</p>
                        </section>
                        <section className={"flex items-center w-full  gap-1"}>
                            <input type="checkbox" checked={true} {...register("options.expenses")}/>
                            <p className={"text-xs"}>Detalhamento de despesas (lista completa de despesas do periodo)</p>
                        </section>

                    </div>
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

export default ModalReports;
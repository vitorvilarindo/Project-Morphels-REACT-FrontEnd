import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import {useState, useEffect} from "react";
import Header2 from "../components/header2.jsx";
import OpenFromButton from "../components/openFromButton.jsx";
import DataBalons from "../components/dadaBalons.jsx";
import SearchArea from "../components/searchArea.jsx";
import SearchBar from "../components/searchBar.jsx";
import Filt from "../components/filt.jsx";
import ModalRevenues from "../components/modalRevenues.jsx";
import { useForm } from "react-hook-form";
import MainRequests from "../services/requests.js";

const requests = new MainRequests()

function RevenuesPage() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("")
  const [showFilter, setShowFilter] = useState(false);
  const [type, setType] = useState(""),
      [start_date, setStart_date] = useState(""),
      [end_date, setEnd_date] = useState("")


  const { register, handleSubmit } = useForm();

  const onShowForm = () => {
    setShowForm(!showForm);
    console.log("Button clicked! Show form:", showForm);
  };



  async function onGetRevenues() {
      try{
          const response = await requests.onGet("revenues", '');
          setRevenues(response);
      }catch(error){
          console.log(error);
      }

  }

  useEffect(() => {
    onGetRevenues().then();
  }, []);

  useEffect( () => {
      const fetchData = async () => {
          try {
              const response = await requests.onGet("revenues", search);
              setRevenues(response);
          } catch (error) {
              console.error("Erro ao buscar revenues:", error);
          }
      };

      fetchData().then();

  }, [search]);

    useEffect(() => {

        if (!type && !start_date && !end_date) return;
        async function onFilterRevenues() {
            try {
                const response = await requests.onFilter("revenues", {
                    type,
                    start_date,
                    end_date,
                });
                setRevenues(response); // garante que seja array
            } catch (error) {
                console.error("Erro ao filtrar revenues:", error);
            }
        }
        console.log(type)
        onFilterRevenues().then(); //
    }, [type, start_date, end_date]);



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
              <OpenFromButton onClick={onShowForm}>
                {"New Revenue"}
              </OpenFromButton>
            </div>
          </section>
            <SearchArea placeholder={"Search by description or member..."} showFilter={() => setShowFilter(!showFilter)}
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}/>
            {showFilter && <Filt type={type} start_date={start_date} end_date={end_date}
                                 onChangeType={(e) => setType(e.target.value)}
                                 onChangeStartDate={(e) => setStart_date(e.target.value)}
                                 onChangeEndDate={(e) => setEnd_date(e.target.value)}
                                 options={["Dizimo", "Oferta", "Doação"]}   />}

            {showForm && (
            <div className="bg-gray-50 p-3 rounded-sm border border-gray-300 shadow-md">
              <form
                action={() =>  {handleSubmit(async (data) => {
                    try {
                        await requests.onPost("revenues", data)
                        onGetRevenues().then()
                    }catch (error) {
                        console.error(error)
                    }
                })()

                }}
                className="flex flex-col  space-y-3"
              >
                <section className="flex flex-col items-start">
                  <label htmlFor="member" className="text-xs">
                    Member
                  </label>
                  <SearchBar placeholder="Member" type="text" id="member" {...register("member")} />

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
                  <section className="flex flex-col items-start">
                      <label htmlFor="church" className="text-xs">
                          Church
                      </label>
                      <select
                          id="church"
                          className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2"
                          {...register("church")}
                      >
                          <option value="">Select Church</option>
                          <option value="Igreja Quadra 3">Igreja Quadra 3</option>
                      </select>

                  </section>

                <div className="w-full flex flex-row mt-4 gap-4 ">
                  <button
                    type="submit"
                    className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete"
                  >
                    Submit
                  </button>
                  <button onClick={() => setShowForm(false)} className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">
                    Cancel
                  </button>
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
              color_value={"green"}
              showEditForm={() => {
                setShowEditForm(true);
                setEditData(data);
              }}
              onDelete={async () => {
                  try {
                      await requests.onDelete("revenues", data.id)
                      onGetRevenues().then()
                  }catch(error) {
                      console.log(error);
                  }
              } }
            />
          ))}
          {showEditForm && (
            <ModalRevenues
              onGetRevenues={() => onGetRevenues()}
              onHideForm={() => setShowEditForm(!showEditForm)}
              complete={editData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default RevenuesPage;

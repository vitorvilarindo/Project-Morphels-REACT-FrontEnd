import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import Grafics from "../components/grafics.jsx"
import Balons from "../components/balons.jsx";
import {BadgeDollarSign, Search, Trash2} from "lucide-react";
import Header2 from "../components/header2.jsx";
import SearchBar from "../components/searchBar.jsx";
import {useEffect, useState} from "react";
import OpenFromButton from "../components/openFromButton.jsx";
import SearchArea from "../components/searchArea.jsx";
import ModalReports from "../components/modalReports.jsx";
import MainRequests from "../services/requests.js";

const request = new MainRequests()
function ReportsPage() {
    const [searchMembers, setSearchMembers] = useState("")
    const [reports, setReports] = useState([])
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        async function onfetch(){
            const response = await request.onRepost("list_reports")
            setReports(response)
        }
        onfetch().then()
    })

  return (
      <div className='justify-center h-[90vh] w-screen'>
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
                          <OpenFromButton onClick={() => setShowModal(true)} >
                              {"New Report"}
                          </OpenFromButton>
                      </div>
                  </section>
                  <SearchArea placeholder={"Search by description or member..."} showFilter={() => setShowFilter(!showFilter)}
                              value={search}
                              onChange={(e) => {
                                  setSearch(e.target.value)
                              }}/>
                  <section className="w-full rounded-lg border border-neutral-200 overflow-auto">
                      <table className="w-full ">
                          <thead className="">
                          <tr className="h-10 text-xs text-gray-900 text-left border-b border-b-neutral-200">
                              <th className="px-2">Title</th>
                              <th>Type</th>
                              <th>Period</th>
                              <th>Revenues</th>
                              <th>Expenses </th>
                              <th>Balance</th>
                              <th>Create in</th>
                              <th>By</th>
                              <th className="text-right px-2">Actions</th>
                          </tr>
                          </thead>
                          <tbody>
                          {reports.map((report) => {
                              const dates = [report.date, report.start_date, report.end_date];
                              let formatedDates = []
                              for( let date of dates ) {
                                  formatedDates.push(new Date(date).toLocaleDateString("pt-BR", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                  }))
                              }


                              return (
                                  <tr className="h-11 text-xs text-gray-900 text-left border-b border-b-neutral-200 hover:bg-gray-100"
                                      key={report.id}>
                                      <td className="p-2">{report.title}</td>
                                      <td><div className="inline-block border border-neutral-200 px-1 rounded-md">{report.type}</div></td>
                                      <td>{formatedDates[1]} until {formatedDates[2]}</td>
                                      <td className={"green-red-600"}>{report.revenues}</td>
                                      <td className={"text-red-800"}>{report.expenses}</td>
                                      <td className={"accent-green-600"}>{report.revenues - report.expenses}</td>
                                      <td>{formatedDates[0]}</td>
                                      <td>{report.by}</td>

                                      <td>
                                          <div className="pr-3 flex justify-end  items-center gap-2">
                                              <button>
                                                  <ArrowDownToLine size={18}/>
                                              </button>

                                              <button
                                                  className="text-red-600 hover:bg-red-200 p-1 rounded-md">
                                                  <Trash2 size={18}/>
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              );
                          })}

                          </tbody>
                      </table>
                  </section>
                  {showModal && (
                      <ModalReports
                          onGetRevenues={() => onGetRevenues()}
                          onHideForm={() => setShowModal(false)}
                      />
                  )}
              </div>
          </div>
      </div>
  )}
export default ReportsPage;
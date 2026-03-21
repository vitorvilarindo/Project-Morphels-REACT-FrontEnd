import Balons from "./balons.jsx";
import {
    Building2,
    CreditCard,
    Info,
    MapPin,
    Phone,
    Search,
    Trash2,
    ScanBarcode,
    Plus,
    ArrowDownToLine
} from "lucide-react";
import Header2 from "./header2.jsx";
import OpenFromButton from "./openFromButton.jsx";
import SearchBar from "./searchBar.jsx";
import Inputs from "./inputs.jsx";
import ModalInfo from "./modelInfo.jsx";
import {useEffect, useState} from "react";
import MainRequests from "../services/requests.js";
import {useForm} from "react-hook-form";
import Scanner from "./scanner.jsx";

const request = new MainRequests()

export function Page1(){
    const [members, setMembers] = useState([])
    const [showMemberForm, setShowMemberForm] = useState(false)
    const [searchMembers, setSearchMembers] = useState("")

    const {register, handleSubmit} = useForm();

    async function onGetMembers(search) {
        try{
            const response = await request.onGet("members", search);
            setMembers(response);
        }catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
        onGetMembers(searchMembers).then();
    },[])


    return(
        <main>
            <div className="flex justify-center">
                <div
                    className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                    <section className="flex justify-between items-center">
                        <Header2
                            title={"Members Form"}
                            description={"Form to add new member"}
                        />
                        <div className="flex justify-center">
                            <OpenFromButton
                                onClick={() => setShowMemberForm(!showMemberForm)}>{showMemberForm ? "Cancel" : "New Member"}</OpenFromButton>
                        </div>
                    </section>
                    {showMemberForm && (
                        <div className="">
                            <form action={() => handleSubmit(async (data) => {
                                await request.onPost("members", data)
                                onGetMembers(searchMembers).then()
                            })()}
                                  className="flex flex-col  space-y-3">
                                <section className="flex flex-col items-start space-y-1">
                                    <label htmlFor="member" className="text-xs">Complete name *</label>
                                    <SearchBar placeholder="Name" type="text"
                                               id="member" {...register("name")} />
                                </section>

                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="cellphone" type="text" placeholder={'(61) 91234-5678'}
                                            register={{...register("cellphone")}}>Cellphone *</Inputs>
                                    <Inputs id="dateBorn" type="date" register={{...register("date_birth")}}>Date
                                        of Birth</Inputs>
                                </section>
                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="pixKey" type="text" placeholder={'Write the Pix key.'}
                                            register={{...register("pixkey")}}>Pix Key</Inputs>
                                    <div className="flex flex-col items-start w-full space-y-1">
                                        <label htmlFor="pixType" className="text-xs">Pix type</label>
                                        <select id="pixType"
                                                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register("pixtype")} >
                                            <option value="CPF">CPF</option>
                                            <option value="CNPJ">CNPJ</option>
                                            <option value="E-mail">E-mail</option>
                                            <option value="Telefone">Telefone</option>
                                            <option value="aleatoryKey">Aleatory Key</option>
                                        </select>
                                    </div>

                                </section>


                                <div className="w-full flex flex-row mt-4 gap-4 ">
                                    <button type="submit"
                                            className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit
                                    </button>
                                    <button onClick={() => setShowMemberForm(false)}
                                            className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                    <Header2 title={"Registed Member"} description={""}/>
                    <section className="flex items-center gap-2">
                        <Search size={16} className="text-gray-500"/>
                        <SearchBar placeholder="Member" type="text" id="member" value={searchMembers} onChange={(e) => setSearchMembers(e.target.value)} />
                    </section>
                    <section className="w-full rounded-lg border border-neutral-200 overflow-auto">
                        <table className="w-full ">
                            <thead className="">
                            <tr className="h-10 text-xs text-gray-900 text-left border-b border-b-neutral-200">
                                <th className="px-2">Nome</th>
                                <th>Telefone</th>
                                <th>Idade</th>
                                <th>Tipo</th>
                                <th>Chave Pix</th>
                                <th className="text-right px-2">Controles</th>
                            </tr>
                            </thead>
                            <tbody>
                            {members.map((member) => {
                                const dataObj = new Date(member.date_birth);

                                const formatedData = dataObj.toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                });

                                return (
                                    <tr className="h-11 text-xs text-gray-900 text-left border-b border-b-neutral-200 hover:bg-gray-100"
                                        key={member.id}>
                                        <td className="p-2">{member.name}</td>
                                        <td>{member.cellphone}</td>
                                        <td className="flex flex-col gap-1 py-1">
                                            <section
                                                className="bold">{parseInt(new Date().getFullYear()) - parseInt(formatedData.substring(6, 10))} anos
                                            </section>
                                            <section className=" text-gray-500">{formatedData}</section>
                                        </td>
                                        <td>
                                            <div
                                                className="inline-block border border-neutral-200 px-1 rounded-md">{member.pixtype}</div>
                                        </td>
                                        <td>{member.pixkey}</td>

                                        <td>
                                            <div className="pr-3 flex justify-end  items-center gap-2">

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
                </div>


            </div>

        </main>
    )
}

export function Page2(){
    const [companies, setCompanies] = useState([])
    const [showCompaniesForm, setShowCompaniesForm] = useState(false)
    const [selectedCompanyInfo, setSelectedCompanyInfo] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    const [searchCompanies, setSearchCompanies] = useState("")

    const {register, handleSubmit} = useForm();

    async function onGetCompanyes(search) {
        try {
            const response = await request.onGet("companies", search);
            setCompanies(response);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    }

    function onShowInfo(data) {
        setSelectedCompanyInfo(data);
        setShowInfo(true)
    }

    useEffect(() =>{
        onGetCompanyes(searchCompanies).then()
    },[])

    return(<main>
        <div className="flex justify-center">
            <div
                className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                <section className="flex justify-between items-center">
                    <Header2
                        title={"Companies Form"}
                        description={"Form to add new company"}
                    />
                    <div className="flex justify-center">
                        <OpenFromButton
                            onClick={() => setShowCompaniesForm(!showCompaniesForm)}>{showCompaniesForm ? "Cancel" : "New Company"}</OpenFromButton>
                    </div>
                </section>
                {showCompaniesForm && (
                    <div className="mt-4">

                        <form action={() => handleSubmit(async (data) => {
                            await request.onPost("companies", data)
                            onGetCompanyes(searchCompanies).then()
                        })()}
                              className="flex flex-col  space-y-3">
                            <article className="space-y-3">
                                <section className="flex gap-2 items-center mb-4">
                                    <Building2 size={21}/>
                                    <h2 className="text-sm font-bold">Empress's Data</h2>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <Inputs id="cnpj" type="text" placeholder={'00.000.000/0000-00'}
                                            register={{...register("CNPJ")}}>CNPJ *</Inputs>
                                    <div className="flex flex-col items-start w-[30%] space-y-2">
                                        <button
                                            className="w-full justify-center gap-3 flex flex-row text-xs bg-gray-100 hover:bg-gray-200 border rounded-md border-gray-100 px-2 py-2">
                                            <Search size={16}/>
                                            <div>Buscar CNPJ</div>
                                        </button>
                                    </div>
                                </section>

                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="companyName" type="text" placeholder={'Empresa ABC LTDA'}
                                            register={{...register("company_name")}}>Company Name *</Inputs>
                                    <Inputs id="fantasyName" type="text" placeholder={'ABC Empresa'}
                                            register={{...register("fantasy_name")}}>Fantasy Name</Inputs>

                                </section>
                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="inscricaoEstadual" type="text" placeholder={'000000-0'}
                                            register={{...register("estate_registration")}}>Inscrição
                                        Estadual</Inputs>
                                    <Inputs id="inscricaoMunicipal" type="text" placeholder={'000000-0'}
                                            register={{...register("municipal_registration")}}>Inscrição
                                        Municipal</Inputs>

                                </section>
                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="pixKey" type="date" register={{...register("open_date")}}>Open
                                        Date</Inputs>
                                    <div className="flex flex-col items-start w-full space-y-1">
                                        <label htmlFor="pixType" className="text-xs">Register
                                            Situation</label>
                                        <select id="pixType"
                                                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register("situation")} >
                                            <option value="Active">Active</option>
                                            <option value="Suspence">Suspence</option>
                                            <option value="Inapta">Inapt</option>
                                            <option value="Baixada">Baixada</option>
                                        </select>
                                    </div>
                                </section>
                            </article>
                            <article className="space-y-3">
                                <section className="flex gap-2 items-center mb-4 mt-4">
                                    <MapPin size={21}/>
                                    <h2 className="text-sm font-bold">Empress's Data</h2>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <div className="flex flex-col items-start w-[20%] space-y-2">
                                        <label htmlFor="member" className="text-xs">CEP </label>
                                        <input
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="member"
                                            placeholder="00.000.000/0000-00" {...register("cep")}/>
                                    </div>
                                    <Inputs id="address" type="text"
                                            placeholder={'Street name, Avenue, etc'}
                                            register={{...register("street")}}>street </Inputs>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <div className="flex flex-col items-start w-[20%] space-y-2">
                                        <label htmlFor="member" className="text-xs">Nùmero </label>
                                        <input
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="member"
                                            placeholder="123" {...register("number")}/>
                                    </div>
                                    <Inputs id="complement" type="text" placeholder={'Sala, Andar, etc'}
                                            register={{...register("complement")}}>Complement </Inputs>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <Inputs id="neighborhood" type="text" placeholder={'Neighborhood name'}
                                            register={{...register("neighborhood")}}>Neighborhood </Inputs>
                                    <div className="flex flex-col items-start w-[50%] space-y-2">
                                        <label htmlFor="city" className="text-xs">Cidade </label>
                                        <input
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="city"
                                            placeholder="São Paulo" {...register("city")}/>
                                    </div>
                                    <div className="flex flex-col items-start w-[50%] space-y-1">
                                        <label htmlFor="UF" className="text-xs">UF </label>
                                        <select
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="UF"
                                            placeholder="Sala, Andar, etc" {...register("UF")}>
                                            <option value="ac">AC</option>
                                            <option value="al">AL</option>
                                            <option value="ap">AP</option>
                                            <option value="am">AM</option>
                                            <option value="ba">BA</option>
                                            <option value="ce">CE</option>
                                            <option value="df">DF</option>
                                            <option value="es">ES</option>
                                            <option value="go">GO</option>
                                            <option value="ma">MA</option>
                                            <option value="mt">MT</option>
                                            <option value="ms">MS</option>
                                            <option value="mg">MG</option>
                                            <option value="pa">PA</option>
                                            <option value="pb">PB</option>
                                            <option value="pr">PR</option>
                                            <option value="pe">PE</option>
                                            <option value="pi">PI</option>
                                            <option value="rj">RJ</option>
                                            <option value="rn">RN</option>
                                            <option value="rs">RS</option>
                                            <option value="ro">RO</option>
                                            <option value="rr">RR</option>
                                            <option value="sc">SC</option>
                                            <option value="sp">SP</option>
                                            <option value="se">SE</option>
                                            <option value="to">TO</option>
                                        </select>
                                    </div>
                                </section>
                            </article>
                            <article className="space-y-3">
                                <section className="flex gap-2 items-center mb-4 mt-4">
                                    <Phone size={21}/>
                                    <h2 className="text-sm font-bold">Contact</h2>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <Inputs id="cellphone" type="text" placeholder={'(61) 91234-5678'}
                                            register={{...register("cellphone")}}>Cellphone </Inputs>
                                    <Inputs id="telephone" type="text" placeholder={'company@contact.com'}
                                            register={{...register("email")}}>E-mail </Inputs>
                                </section>

                            </article>
                            <article className="space-y-3">
                                <section className="flex gap-2 items-center mb-4 mt-4">
                                    <Building2 size={21}/>
                                    <h2 className="text-sm font-bold">Atividade Econômica</h2>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <div className="flex flex-col items-start w-[30%] space-y-2">
                                        <label htmlFor="CNAE" className="text-xs">CNAE </label>
                                        <input
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="CNAE"
                                            placeholder="0000-0/00" {...register("CNAE")} />
                                    </div>
                                    <Inputs id="activityDescription" type="text"
                                            placeholder={'Ex: Serviços de manutenção e reparação'}
                                            register={{...register("activity_description")}}>Descrição de
                                        Atividade </Inputs>
                                </section>

                            </article>
                            <article className="space-y-3">
                                <section className="flex gap-2 items-center mb-4 mt-4">
                                    <CreditCard size={21}/>
                                    <h2 className="text-sm font-bold">Dados para Pagamento</h2>
                                </section>
                                <section className="flex flex-row gap-4 w-full items-end">
                                    <div className="flex flex-col items-start w-[30%] space-y-1">
                                        <label htmlFor="member" className="text-xs">Pix type </label>
                                        <select
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            type="text" id="member"
                                            placeholder="0000-0/00" {...register("pixtype")}>
                                            <option value="CPF">CPF</option>
                                            <option value="CNPJ">CNPJ</option>
                                            <option value="E-mail">E-mail</option>
                                            <option value="Telefone">Telefone</option>
                                            <option value="aleatoryKey">Aleatory Key</option>
                                        </select>
                                    </div>
                                    <Inputs id="pixKeyPayment" type="text"
                                            placeholder={'Write the Pix key.'}
                                            register={{...register("pixkey")}}>Pix Key</Inputs>
                                </section>

                            </article>

                            <div className="w-full flex flex-row mt-4 gap-4 ">
                                <button type="submit"
                                        className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit
                                </button>
                                <button onClick={() => setShowCompaniesForm(false)}
                                        className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Address
                                </button>
                            </div>
                        </form>
                    </div>)}

            </div>
        </div>
        <div className="flex justify-center">
            <div
                className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                <Header2 title={"Registed Member"} description={""}/>
                <section className="flex items-center gap-2">
                    <Search size={16} className="text-gray-500"/>
                    <SearchBar placeholder="Member" type="text" id="member" value={searchCompanies} onChange={(e) => setSearchCompanies(e.target.value)} />
                </section>

                <section className="w-full rounded-lg border border-neutral-200 overflow-auto">
                    <table className="border-collapse w-[150%] xl:w-full">
                        <thead className="w-full">
                        <tr className="text-xs text-gray-900 text-left border-b border-b-neutral-200 h-10">
                            <th className="px-2 whitespace-nowrap w-[20%]">Company Name</th>
                            <th className="whitespace-nowrap">Fantasy Name</th>
                            <th className="whitespace-nowrap">CNPJ</th>
                            <th className="whitespace-nowrap">City/UF</th>
                            <th className="whitespace-nowrap">Cellphone</th>
                            <th className="whitespace-nowrap">Situation</th>
                            <th className="whitespace-nowrap">CNAE</th>
                            <th className="text-right px-2 whitespace-nowrap">Actions</th>
                        </tr>
                        </thead>
                        <tbody className=" w-full">
                        {companies.map((company) => (<tr key={company.id}
                                                         className="text-xs text-gray-900 text-left border-b border-b-neutral-200 h-11">
                            <td className="px-2 whitespace-nowrap">{company.company_name}</td>
                            <td className="whitespace-nowrap">{company.fantasy_name}</td>
                            <td className="whitespace-nowrap">{company.cnpj}</td>
                            <td className="whitespace-nowrap">{company.city}/{(company.uf || '').toUpperCase()}</td>
                            <td className="whitespace-nowrap">{company.cellphone}</td>
                            <td>
                                <div
                                    className="inline-block  border bg-black text-white border-neutral-200 px-1 py-0.5 rounded-md uppercase whitespace-nowrap">{company.situation}</div>
                            </td>
                            <td className="whitespace-nowrap">{company.cnae}</td>

                            <td>
                                <div className="pr-3 flex justify-end gap-2 items-center">
                                    <button onClick={() => {
                                        onShowInfo({
                                            id: company.id,
                                            cnpj: company.cnpj,
                                            fantasy_name: company.fantasy_name,
                                            estate_registration: company.estate_registration,
                                            municipal_registration: company.municipal_registration,
                                            open_date: company.open_date,
                                            situation: company.situation,
                                            company_name: company.company_name,
                                            cnae: company.cnae,
                                            activity_description: company.activity_description,
                                            cep: company.cep,
                                            street: company.street,
                                            number: company.number,
                                            complement: company.complement,
                                            neighborhood: company.neighborhood,
                                            city: company.city,
                                            uf: company.uf,
                                            email: company.email,
                                            cellphone: company.cellphone,
                                            pixtype: company.pixtype,
                                            pixkey: company.pixkey,
                                        })
                                    }} className="hover:bg-neutral-200 p-1 rounded-md">
                                        <Info size={18}/>
                                    </button>
                                    <button className=" text-red-600">
                                        <Trash2 size={18}/>
                                    </button>
                                </div>
                            </td>
                        </tr>))}

                        </tbody>
                    </table>

                </section>
            </div>
            {showInfo && selectedCompanyInfo && (
                <ModalInfo selectedCompanyInfo={selectedCompanyInfo}
                           setShowInfo={() => setShowInfo(false)}/>
            )}
        </div>
    </main>)
}
export function Page3 (){
    const [showForm, setShowForm] = useState(false),
        [showOptions, setShowOptions] = useState(false);
    const [showCardsForm, setShowCardsForm] = useState(false)
    const {register, watch, setValue, handleSubmit} = useForm();
    const [searchCards, setSearchCards] = useState([])
    const [cards, setCards] = useState([])
    const [showScanner, setShowScanner] = useState(false)
    const [filted, setFilted] = useState([])
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("")

    const fetchData = async () => {
        try {
            // const response_revenues = await request.onGet("revenues", search);
            const response_members = await request.onGet("members", search);
            // setRevenues(response_revenues);
            setMembers(response_members);
        } catch (error) {
            console.error("Erro ao buscar revenues:", error);
        }
    };
    useEffect(() => {
        fetchData().then();

    }, [search]);
    const searchTerm = watch("member")

    useEffect(() => {
        if (searchTerm && searchTerm.length > 0) {
            const result = members.filter((member) =>
                member.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setShowOptions(true)
            setFilted(result)
        }else {
            setFilted([])
            setShowOptions(false);
        }

    }, [searchTerm])

    const selectSuggestion = (value) => {
        setValue("member", value);
        setFilted([])
        setShowOptions(false);
    }

    return (
        <main>
            <div className="flex justify-center">
                <div
                    className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                    <section className="flex justify-between items-center">
                        <Header2
                            title={"Cards form"}
                            description={"Form to add new members cards"}
                        />
                        <div className="flex justify-center">
                            <OpenFromButton
                                onClick={() => setShowCardsForm(!showCardsForm)}>{showCardsForm ?  "Cancel" : "New Card"}</OpenFromButton>
                        </div>
                    </section>
                    {showCardsForm && (
                        <div className="">
                            <form action={() => handleSubmit(async (data) => {
                                await request.onPost("members", data)
                                fetchData().then()
                            })()}
                                  className="flex flex-col  space-y-3">
                                <sections clasname="">
                                    <button type={"button"} onClick={() => setShowScanner(true)} className="flex items-center gap-4 bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete"> <ScanBarcode  size={20}/>
                                    Scan Code
                                    </button>
                                </sections>
                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="bar_code" type="text" placeholder={'0000000000000000000000000000'}
                                            register={{...register("bar_code")}}>Bar Code *</Inputs>
                                    <section className="w-full flex flex-col items-start relative">
                                        <label htmlFor="member" className="text-xs">
                                            Member
                                        </label>
                                        <input
                                            className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 transition-all px-2 py-2"
                                            placeholder="Member" type="text" id="member"
                                            {...register("member")} />
                                        {showOptions && filted.length !== 0 && <div
                                            className={"w-full items-start bg-gray-100 border border-t-0 border-gray-400 rounded-md rounded-t-none absolute top-11"}>
                                            <ul className={"w-full "}>
                                                {filted.map((member) => (
                                                    <li key={member.id}
                                                        onClick={() => selectSuggestion(member.name)}
                                                        className={"flex items-start pl-2 py-1 hover:bg-gray-300"}>
                                                        {member.name}
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>}

                                    </section>
                                </section>


                                <section className="flex flex-row gap-4 w-full">
                                    <Inputs id="issue_date" type="date" placeholder={'(61) 91234-5678'}
                                            register={{...register("issue_date")}}>Issue Date *</Inputs>
                                    <Inputs id="due_date" type="date" register={{...register("due_date")}}>Due Date *</Inputs>
                                </section>

                                <section className="flex flex-row gap-4 w-full">
                                    <div className="flex flex-col items-start w-full space-y-1">
                                        <label htmlFor="pixType" className="text-xs">Pix type</label>
                                        <select id="stats"
                                                className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register("stats")} >
                                            <option value="Active">Active</option>
                                            <option value="Due">Due</option>
                                            <option value="Canceled">Canceled</option>
                                        </select>
                                    </div>

                                </section>


                                <div className="w-full flex flex-row mt-4 gap-4 ">
                                    <button type="submit"
                                            className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit
                                    </button>
                                    <button onClick={() => setShowCardsForm(false)}
                                            className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel
                                    </button>
                                </div>
                            </form>
                            {showScanner && <Scanner hidden={() => setShowScanner(false)} />}
                        </div>

                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="flex flex-col justify-center w-[55vw] mt-7 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-5">
                    <Header2 title={"Registed Member"} description={""}/>
                    <section className="flex items-center gap-2">
                        <Search size={16} className="text-gray-500"/>
                        <SearchBar placeholder="Member" type="text" id="member" value={searchCards} onChange={(e) => setSearchCards(e.target.value)} />
                    </section>
                    <section className="w-full rounded-lg border border-neutral-200 overflow-auto">
                        <table className="w-full ">
                            <thead className="">
                            <tr className="h-10 text-xs text-gray-900 text-left border-b border-b-neutral-200">
                                <th className="px-2">Member</th>
                                <th>Barc Code</th>
                                <th>Issue Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th className="text-right px-2">Controlers</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cards.map((card) => {
                                const formatedData = new Date(card.issue_date).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                });
                                const formatedData2 = new Date(card.due_date).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                });

                                return (
                                    <tr className="h-11 text-xs text-gray-900 text-left border-b border-b-neutral-200 hover:bg-gray-100"
                                        key={card.id}>
                                        <td className="p-2">{card.member}</td>
                                        <td>{card.bar_code}</td>
                                        <td className="flex flex-col gap-1 py-1">
                                            <section className=" text-gray-500">{formatedData}</section>
                                        </td>
                                        <td className="flex flex-col gap-1 py-1">
                                            <section className=" text-gray-500">{formatedData2}</section>
                                        </td>
                                        <td>
                                            <div
                                                className="inline-block border border-neutral-200 px-1 rounded-md">{card.status}</div>
                                        </td>


                                        <td>
                                            <div className="pr-3 flex justify-end  items-center gap-2">

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
                </div>
            </div>
        </main>
    )
}
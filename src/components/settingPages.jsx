import { UserBallons } from './settingsBallons.jsx'
import {useEffect, useState} from "react";
import MainRequests from "../services/requests.js";
import {Plus, ScanBarcode} from "lucide-react";
import Inputs from "./inputs.jsx";
import { useForm } from "react-hook-form"
import Header2 from "./header2.jsx";

const request = new MainRequests()

export function Page1(){
    const [users, setUsers] = useState([]);
    const [showSingUpUserForm, setShowSingUpUserForm] = useState(false);
    const {register, handleSubmit} = useForm();

    useEffect(()=>{
        const getUsers = async () => {
            const response = await request.onGet('users', '');
            setUsers(response);
        }
        getUsers().then();
    },[])
    return (
        <main className={'flex flex-col items-center justify-center '}>
            <div className={'flex w-[55vw] justify-between items-center py-6'}>
                <section className={'flex flex-col items-start '}>
                    <h1 className={'text-2xl'}>Cadastro de Usuários</h1>
                    <h2 className={'text-sm text-neutral-500'}>Gerencie os usuários do sistema</h2>
                </section>
                <section>
                    <button onClick={() => setShowSingUpUserForm(true)} className={'flex gap-2 bg-black text-white text-sm p-2 rounded-md items-center'}><Plus size={16}/> <p>Novo Usuário</p> </button>
                </section>
                {showSingUpUserForm && (
                    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
                        <div className="flex flex-col bg-white w-[50%] lg:w-[30%] p-6 rounded-lg shadow-lg space-y-4">
                            <div className="">
                                <form action={() => handleSubmit(async (data) => {
                                    await request.onPost("members", data)

                                })()}
                                      className="flex flex-col  space-y-3">
                                    <Header2
                                        title={"Revenues put Form"}
                                        description={"Form to edit revenues"}
                                    />
                                    <section className="flex flex-row gap-4 w-full">
                                        <Inputs id="name" type="text" placeholder={'Ex: JOAO DA MACEDO'}
                                                register={{...register("name")}}>User name *</Inputs>
                                        <Inputs id="email" type="email" placeholder={"Ex: João da melancia"} register={{...register("email")}}>Email *</Inputs>
                                    </section>

                                    <section className="flex flex-row gap-4 w-full">
                                        <Inputs id="phone_number" type="text" placeholder={'(61) 91234-5678'}
                                                register={{...register("phone_number")}}>Cellphone *</Inputs>
                                        <div className="flex flex-col items-start w-full space-y-1">
                                            <label htmlFor="designation" className="text-xs">Designation *</label>
                                            <select id="stats"
                                                    className="w-full text-xs bg-gray-100 border rounded-md border-gray-100 hover:cursor-auto focus:border-gray-400 focus:outline-none placeholder:text-gray-500 focus:ring-gray-400 px-2 py-2" {...register("stats")} >
                                                <option value="Active">Active</option>
                                                <option value="Due">Due</option>
                                                <option value="Canceled">Canceled</option>
                                            </select>
                                        </div>

                                    </section>

                                    <section className="flex flex-row gap-4 w-full">
                                        <Inputs id="password" type="text" placeholder={'Ex: XXXXXXXXX'}
                                                register={{...register("password")}}>Password *</Inputs>
                                        <Inputs id="confirm_password" type="text" placeholder={'Ex: XXXXXXXXX'} register={{...register("confirm_password")}}>Confirm password *</Inputs>
                                    </section>

                                    <div className="w-full flex flex-row mt-4 gap-4 ">
                                        <button type="submit"
                                                className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit
                                        </button>
                                        <button onClick={() => setShowSingUpUserForm(false)}
                                                className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={'grid grid-cols-3 gap-2 w-[55vw]'}>{users.map((user) => (
                    <UserBallons
                        key={user.id || user.email} // Always include a unique key!
                        user_name={user.name}
                        email={user.email}
                        cellphone={user.cellphone}
                        designation={user.designation}
                        sign_up_date={user.sign_up_date} // Fixed a potential typo here
                        last_access={user.last_access}
                    />
                ))}
            </div>
        </main>
    );
}

export function Page2() {
    return (
        <div>Dboa</div>
    )
}

export function Page3() {
    return (
        <div>Tmjt</div>
    )
}
export function Page4(){
    return (
        <div>Vai nessa</div>
    )
}
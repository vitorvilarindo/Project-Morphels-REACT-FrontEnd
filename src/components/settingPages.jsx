import { UserBallons } from './settingsBallons.jsx'
import {useEffect, useState} from "react";
import MainRequests from "../services/requests.js";
import {Plus} from "lucide-react";

const request = new MainRequests()

export function Page1(){
    const [users, setUsers] = useState([]);
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
                    <button className={'flex gap-2 bg-black text-white text-sm p-2 rounded-md items-center'}><Plus size={16}/> <p>Novo Usuário</p> </button>
                </section>
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
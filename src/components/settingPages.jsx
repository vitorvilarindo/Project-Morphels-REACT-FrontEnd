import { UserBallons } from './settingsBallons.jsx'
import {useEffect, useState} from "react";
import MainRequests from "../services/requests.js";

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
        users.map((user)=>{
            <UserBallons
                user_name={user.name}
                email={user.email}
                cellphone={user.cellphone}
                designation={user.designation}
                sing_up_date={user.sing_up_date}
                last_access={user.last_access}/>
            })

    )
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
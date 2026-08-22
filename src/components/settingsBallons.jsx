import {Calendar, Mail, Phone, Shield, Trash2} from "lucide-react";
import {useState, useEffect} from "react";
import MainRequests from "../services/requests.js";

const requests = new MainRequests()

export function UserBallons({user_name, email, cellphone, designation, sing_up_date, last_access, deleteUser}) {
    return (
        <article
            className={"grid grid-flow-col grid-rows-[auto_1fr] w-full gap-3 bg-bg-secondary-color border border-bg-secondary-destack-color rounded-xl p-5"}>
            <div className={"w-full flex items-center justify-start gap-3 m-0 p-0"}>
                <section>
                    <h1 className={'h-fit bg-black text-secondary-titles-color rounded-2xl px-2 py-1'}>JS</h1>
                </section>
                <section className={'space-y-1'}>
                    <h2>{user_name}</h2>
                </section>
            </div>
            <div className={"w-full flex flex-col items-start justify-start gap-2"}>
                <ul className={'items-center justify-start space-y-2'}>
                    <li className={'flex items-center gap-2'}><Mail className={'text-neutral-400'} size={15}/><p
                        className={'text-sm'}>{email}</p></li>
                    <li className={'flex items-center gap-2'}><Phone className={'text-neutral-400'} size={15}/><p
                        className={'text-sm'}>{cellphone}</p></li>
                    <li className={'flex items-center gap-2'}><Shield className={'text-neutral-400'} size={15}/><p
                        className={'text-sm'}>{designation}</p></li>
                    <li className={'flex items-center gap-2'}><Calendar className={'text-neutral-400'} size={15}/><p
                        className={'text-sm'}>{sing_up_date}</p></li>
                </ul>
                <p className={'text-xs  text-neutral-500'}>Last access: {last_access}</p>
            </div>
            <div className={"w-full h-[90%] flex items-top justify-end"}>
                <section className={'hover:bg-gray-200 px-3 py-3 rounded-2xl'}>
                    <button onClick={deleteUser}><Trash2 color={'red'} size={16}/></button>
                </section>

            </div>

        </article>
    )
}

export function RolesBallons({role, number_of_pages, deleteRoleAndPermissions}) {
    const [numberOfPagesWithPermissions, setNumberOfPagesWithPermissions] = useState(0)

    useEffect(() => {
        async function fetchNumberOfPagesWithPermissions() {
            const number_of_pages_response = await requests.onPost("permissions/count/modules", {role_id: role.id})
            console.log(number_of_pages_response.data[0]?.total_permissions_modules)
            setNumberOfPagesWithPermissions(number_of_pages_response.data[0]?.total_permissions_modules)
        }

        fetchNumberOfPagesWithPermissions().then()
    }, [])
    return (
        <article
            className={"grid grid-flow-col grid-rows-[auto_1fr] w-full gap-3 bg-bg-secondary-color border border-bg-secondary-destack-color rounded-xl p-5"}>
            <div className={"w-full flex items-center justify-start gap-3 m-0 p-0"}>
                <section>
                    <h1><Shield/></h1>
                </section>
                <section className={'space-y-1 text-left'}>
                    <h2>{role.name}</h2>
                    <p className={"text-sm"}>{role.description}</p>
                </section>
            </div>
            <div className={"w-full flex flex-col items-start justify-start gap-2"}>
                <ul className={'items-center justify-start space-y-2'}>
                    <li className={'flex items-center justify-between gap-2'}><Mail size={15}/><p
                        className={'text-xs px-2'}>Módulos com permissão:</p> <p
                        className={'bg-bg-secondary-destack-color text-sm rounded-md px-1'}>{numberOfPagesWithPermissions ? numberOfPagesWithPermissions : "0"} de {number_of_pages}</p>
                    </li>
                </ul>
            </div>
            <div className={"w-full h-[90%] flex items-top justify-end"}>
                <section className={'hover:bg-gray-200 px-3 py-3 rounded-2xl'}>
                    <button onClick={deleteRoleAndPermissions}><Trash2 color={'red'} size={16}/></button>
                </section>

            </div>

        </article>
    )
}
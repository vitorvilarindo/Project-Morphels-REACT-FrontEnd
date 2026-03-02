import {Calendar, Mail, Phone, Shield, Trash2} from "lucide-react";

export function UserBallons({user_name, email, cellphone, designation, sing_up_date, last_access}){
    return (
        <article className={"grid grid-flow-col grid-rows-[auto_1fr] w-full gap-3 bg-white border border-gray-200 rounded-xl p-5"}>
            <div className={"w-full flex items-center justify-start gap-3 m-0 p-0"}>
                <section>
                    <h1 className={'h-fit bg-black text-white rounded-2xl px-2 py-1'}>JS</h1>
                </section>
                <section className={'space-y-1'}>
                    <h2>{user_name}</h2>
                </section>
            </div>
            <div className={"w-full flex flex-col items-start justify-start gap-2"}>
                <ul className={'items-center justify-start space-y-2'}>
                    <li className={'flex items-center gap-2'}><Mail className={'text-neutral-400'} size={15}/><p className={'text-sm'}>{email}</p></li>
                    <li className={'flex items-center gap-2'}><Phone className={'text-neutral-400'} size={15}/><p className={'text-sm'}>{cellphone}</p></li>
                    <li className={'flex items-center gap-2'}><Shield className={'text-neutral-400'} size={15}/><p className={'text-sm'}>{designation}</p></li>
                    <li className={'flex items-center gap-2'}><Calendar className={'text-neutral-400'} size={15}/><p className={'text-sm'}>{sing_up_date}</p></li>
                </ul>
                <p className={'text-xs  text-neutral-500'}>Last access: {last_access}</p>
            </div>
            <div className={"w-full h-[90%] flex items-top justify-end"}>
                <section className={'hover:bg-gray-200 px-3 py-3 rounded-2xl'}>
                    <button><Trash2 color={'red'} size={16}/></button>
                </section>

            </div>

        </article>
    )
}
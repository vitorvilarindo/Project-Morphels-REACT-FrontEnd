import Inputs from "../components/inputs.jsx";
import {useForm} from 'react-hook-form'
import {UserRound, Building2} from "lucide-react";

function InstitutionRegister() {
    const {handleSubmit, register, formState: {errors}} = useForm()
    const onSubmit = values => console.log(values);

    return (
        <main className="w-full h-full flex flex-col justify-center items-center">


            <form onSubmit={handleSubmit(onSubmit)}
                  className='w-90 p-5 flex flex-col justify-between border border-gray-300 shadow-lg rounded-lg gap-4 md:w-110'>
                <div className="flex flex-col gap-2">
                    <nav className='flex flex-col items-center justify-center gap-1'>
                        <i className='p-3 border border-gray-300 rounded-4xl shadow-md'>
                            <Building2 size={24}/>
                        </i>

                        <h1 className="text-xl leading-tight">
                            Cadastre sua instituição
                        </h1>
                    </nav>
                    <Inputs id="name" type="text" placeholder="Industrias ABC" erros={errors}
                        register={register("name", {required: true})}>Nome *</Inputs>
                    <Inputs id={"cnpj"} type={"text"} placeholder={"000000000000/0000"} erros={errors}
                            register={{...register("cnpj", {required: true})}}>CNPJ *</Inputs>
                    <Inputs id={"institution_email"} type={"email"} placeholder={"ABS@gmail.com"} erros={errors}
                            register={{...register("institution_email", {required: true})}}>Email*</Inputs>
                    <Inputs id={"institution_phone"} type={"text"} placeholder={"(61) 12345-6789"} erros={errors}
                            register={{...register("institution_phone", {required: true})}}>Telefone *</Inputs>

                </div>

                {/*User register*/}
                <div className="flex flex-col gap-2">
                    <nav className='flex flex-col items-center justify-center gap-1'>
                        <i className='p-3 border border-gray-300 rounded-4xl shadow-md'>
                            <UserRound size={24}/>
                        </i>

                        <h1 className="text-xl leading-tight">
                            Cadastre seu usuário
                        </h1>
                    </nav>
                    <Inputs id={"user_name"} type={"text"} placeholder={"Ex: Eduardo..."} erros={errors}
                            register={{...register("user_name", {required: true})}}>Nome
                        *</Inputs>
                    <Inputs id={"user_email"} type={"email"} placeholder={"ABS@gmail.com"} erros={errors}
                            register={{...register("user_email", {required: true})}}>Email
                        *</Inputs>
                    <Inputs id={"password"} type={"password"} placeholder={"1234..."} erros={errors}
                            register={{...register("password", {required: true})}}>Email*</Inputs>
                    <Inputs id={"user_phone"} type={"text"} placeholder={"(61) 12345-6789"} erros={errors}
                            register={{...register("user_phone", {required: true})}}>Telefone
                        *</Inputs>
                </div>

                <div className="w-full flex flex-row mt-4 gap-4 ">
                    <button type="submit"
                            className="bg-neutral-950 text-white text-xs px-4 py-2 rounded-lg hover:bg-neutral-600 transition-discrete">Submit
                    </button>
                    <button
                        className="bg-white border text-xs border-gray-200 shadow-xs text-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-discrete">Cancel
                    </button>
                </div>
            </form>

        </main>
    )
}

export default InstitutionRegister
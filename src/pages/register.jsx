import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import {Users, Building2, IdCard} from "lucide-react";
import {useEffect, useState} from "react";
import {Page1, Page2, Page3} from '../components/registerPages.jsx'
import MainRequests from "../services/requests.js";

const request = new MainRequests();

function Register() {
    const [activePage, setActivePage] = useState(1);
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        async function fetchPermissions() {
            const response = await request.onGeneral("permissions");
            const group1 = [ "b8ecb185-49dd-4ab9-937c-52e52d4a5be8"];

            if (group1.every(id => response.permissions.includes(id))) {
                setPermissions([1,2,3]);
                setActivePage(1);
            }
        }
        fetchPermissions();
    }, [])


    const pages = [
        { id: 1, name: "Member", permission: 1, component: <Page1 />, icon: <Users  size={14}/> },
        { id: 2, name: "Companies", permission: 2, component: <Page2 />, icon: <Building2  size={14}/> },
        { id: 3, name: "Cards", permission: 3, component: <Page3 />, icon: <IdCard size={14}/> },
    ];

    const currentPage = pages.find(p => p.permission === activePage && permissions.includes(p.permission));

    return (
        <div className="justify-center h-[90vh] w-screen">
            <Header />
            <Menu />

            <section className="flex justify-center items-center mt-7">
                <ul className="w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg">
                    {pages.map(item => (
                            <li key={item.id} className="w-full">
                                <button
                                    onClick={() => setActivePage(item.permission)}
                                    className={`w-full flex gap-3 text-sm justify-center items-center py-1 hover:bg-white ${
                                        activePage === item.permission ? "bg-white" : "bg-transparent"
                                    } rounded-sm`}
                                >
                                    {item.icon}
                                    {item.name}
                                </button>
                            </li>
                        ))}
                </ul>
            </section>

            {currentPage ? currentPage.component : <div>Sem permissão</div>}
        </div>
    );
}


export default Register;
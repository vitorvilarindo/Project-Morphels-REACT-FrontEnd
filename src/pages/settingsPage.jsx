import Header from "../components/header.jsx";
import Menu from "../components/menu.jsx";
import {User, Church, MapPinHouse, ListCheck} from "lucide-react";
import {useState, useEffect} from "react";
import MainRequests from "../services/requests.js";
import {Page1, Page2, Page3, Page4} from "../components/settingPages.jsx";

const request = new MainRequests();

function SettingsPage() {
    const [activePage, setActivePage] = useState(1);
    const [permissions, setPermissions] = useState([]);

    // useEffect(() => {
    //     async function getPermission() {
    //         const response = await request.onGeneral("permissions");
    //
    //         const group1 = ["fd5b8c57-3767-4fed-a9a4-77e896556ef5", "e53fe535-410c-41b0-b46a-04d1acd12458"];
    //         const group2 = [...group1, "9f40386e-8514-4208-96dd-34f1e31ea520"];
    //         const group3 = [...group2, "4c7435e3-f6ba-46ee-8398-d65b1d619233"];
    //         const group4 = [...group3, "8b1f7c7c-40a8-498f-aaa3-900d0fb7c275"];
    //
    //         if (group1.every(id => response.permissions.includes(id))) {
    //             setPermissions([1]);
    //             setActivePage(1);
    //         }
    //         if (group2.every(id => response.permissions.includes(id))) {
    //             setPermissions([1, 2]);
    //             setActivePage(1);
    //         }
    //         if (group3.every(id => response.permissions.includes(id))) {
    //             setPermissions([1, 2, 3]);
    //             setActivePage(1);
    //         }
    //         if (group4.every(id => response.permissions.includes(id))) {
    //             setPermissions([1, 2, 3, 4]);
    //             setActivePage(1);
    //         }
    //     }
    //
    //     getPermission();
    // }, []);

    // Configuração única para menu + páginas
    const pages = [
        { name: "Users", permission: 1, component: <Page1 />, icon: <User size={14}/> },
        { name: "Churches", permission: 2, component: <Page2 />, icon: <Church size={14}/> },
        { name: "Sectors", permission: 3, component: <Page3 />, icon: <MapPinHouse size={14}/> },
        { name: "Designations", permission: 4, component: <Page4 />, icon: <ListCheck size={14}/> },
    ];

    const currentPage = pages.find(p => p.permission === activePage && permissions.includes(p.permission));

    return (
        <div className="justify-center h-[90vh] w-screen">
            <Header />
            <Menu />

            <section className="flex justify-center items-center mt-7">
                <ul className="w-[55vw] flex flex-row bg-gray-200 rounded-sm items-center shadow-lg">
                    {pages
                        .filter(item => permissions.includes(item.permission))
                        .map(item => (
                            <li key={item.permission} className="w-full">
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


export default SettingsPage;


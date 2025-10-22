import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import Table from "../components/table.jsx";
import { useState } from "react";
function RevenuesPage() {
  const [revenues, setRevenues] = useState([{
    id: 0,
    category: 'Dizimo',
    date: '14/10/2025',
    title: 'Dizimo de Alguem',
    value: 2000.00,
    description: 'Dizimo de alguem',
    color_value: "green",
    color_category: "blue"
  },
  {
    id: 1,
    category: 'Oferta',
    date: '15/10/2025',
    title: 'Oferta de Alguem',
    value: 500.00,
    description: 'Oferta de alguem',
    color_value: "green",
    color_category: "yellow"
  },
  {
    id: 2,
    category: 'Dizimo',
    date: '16/10/2025',
    title: 'Dizimo de Outra Pessoa',
    value: 1500.00,
    description: 'Dizimo de outra pessoa',
    color_value: "green",
    color_category: "blue"
  }
  ]);
  return (
    <div className="justify-center h-[90vh] w-screen">
      <Header />
      <Menu />
      <Table
          header_title={"Revenues Form"}
          header_description={"Form to add new revenues"}
          button_title={"New Revenue"}
          datas={revenues}
        />
    </div>
  );
}

export default RevenuesPage;

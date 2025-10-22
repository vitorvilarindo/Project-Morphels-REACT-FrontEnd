import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import Table from "../components/table.jsx";
import { useState } from "react";
function ExpencesPage() {
  const [expences, setExpences] = useState([{
    id: 0,
    category: 'Utilidades',
    date: '14/10/2025',
    title: 'Alguma utilidade',
    value: 2000.00,
    description: 'Utilidade de alguem',
    color_value: "red",
    color_category: "blue"
  },
  {
    id: 1,
    category: 'Alimentação',
    date: '15/10/2025',
    title: 'Compra de comida',
    value: 500.00,
    description: 'Compra no supermercado',
    color_value: "red",
    color_category: "yellow"
  },
  {
    id: 2,
    category: 'Transporte',
    date: '16/10/2025',
    title: 'Combustível',
    value: 1500.00,
    description: 'Abastecimento do carro',
    color_value: "red",
    color_category: "blue"
  }  
]);
  return (
    <div className="justify-center h-[90vh] w-screen">
      <Header />
      <Menu />
      <Table
          header_title={"Expences Form"}
          header_description={"Form to add new expences"}
          button_title={"New expence"}
          datas={expences}
        />
    </div>
  );
}

export default ExpencesPage;
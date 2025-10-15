import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import Table from "../components/table.jsx";
function ExpencesPage() {
  return (
    <div className="justify-center h-[90vh] w-screen">
      <Header />
      <Menu />
      <Table
          header_title={"Expences Form"}
          header_description={"Form to add new expences"}
          button_title={"New expence"}
          category={'Utilidades'}
          data={'14/10/2025'}
          title={'Alguma utilidade'}
          value={2000.00}
          description={"Utilidade de alguem"}
          color_value="red"
          color_categorty="blue"
        />
    </div>
  );
}

export default ExpencesPage;
import Menu from "../components/menu.jsx";
import Header from "../components/header.jsx";
import Table from "../components/table.jsx";
function RevenuesPage() {
  return (
    <div className="justify-center h-[90vh] w-screen">
      <Header />
      <Menu />
      <Table
          header_title={"Revenues Form"}
          header_description={"Form to add new revenues"}
          button_title={"New Revenue"}
          category={'Dizimo'}
          data={'14/10/2025'}
          title={'Dizimo de Alguem'}
          value={2000.00}
          description={"Dizimo de alguem"}
          color_value="green"
          color_categorty="blue"
        />
    </div>
  );
}

export default RevenuesPage;

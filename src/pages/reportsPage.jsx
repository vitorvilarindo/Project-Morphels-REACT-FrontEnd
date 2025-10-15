import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import Grafics from "../components/grafics.jsx"
function ReportsPage() {
  return (
      <div className='justify-center h-[90vh] w-screen'>
        <Header />
        <Menu />
        <section className=" flex justify-center w-[55vw] m-auto gap-4">
          <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
          <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
        </section>
        <section className=" flex justify-center w-[55vw] m-auto">
          <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
        </section>
      </div>
  )}
export default ReportsPage;
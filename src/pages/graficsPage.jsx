import Menu from "../components/menu.jsx"
import Header from "../components/header.jsx";
import Grafics from "../components/grafics.jsx"
function GraficsPage() {
  return (
      <div className='justify-center h-[90vh] w-screen'>
        <Header />
        <Menu />
        <section className=" flex justify-center w-[55vw] m-auto">
          <Grafics title={'Grafico teste'} description={'Estou testando o modelo de gráfico'} grafic={'Gráfico'} />
        </section>
      </div>
  )}
export default GraficsPage;
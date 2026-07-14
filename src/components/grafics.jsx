import Header2 from "./header2.jsx";
function Grafics({title, description, grafic}) {
  return (
      <div className="flex flex-col justify-center w-full mt-6 p-4 bg-bg-secondary-color border border-bg-secondary-color rounded-lg shadow-md">
        <Header2 title={title} description={description}/>
        <section>
          {grafic}
        </section>
      </div>
  )
}
export default Grafics;
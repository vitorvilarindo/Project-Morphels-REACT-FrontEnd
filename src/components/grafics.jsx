import Header2 from "./header2.jsx";
function Grafics({title, description, grafic}) {
  return (
      <div className="flex flex-col justify-center w-full mt-6 p-4 bg-white border border-neutral-200 rounded-lg shadow-md">
        <Header2 title={title} description={description}/>
        <section>
          {grafic}
        </section>
      </div>
  )
}
export default Grafics;
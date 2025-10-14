import Header2 from "./header2.jsx";
function Grafics({title, description, grafic}) {
  return (
    <div className=" flex  justify-center ">
      <div className="flex flex-col justify-center w-[55vw] mt-4 p-4 bg-white border border-neutral-200 rounded-lg shadow-md">
        <Header2 title={title} description={description}/>
        <section>
          {grafic}
        </section>
      </div>
    </div>
  )
}
export default Grafics;
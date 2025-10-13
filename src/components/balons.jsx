function Balons(props) {
  return (
    <div className='flex justify-center items-center mt-7'>
      <section className="w-[55vw]">
        <div className="flex justify-between border border-neutral-200 bg-white p-5 rounded-lg shadow-md w-70 h-35 relative">
          <section className="flex flex-col gap-6 items-start pl-2" >
            <h2 className="justify-end">{props.title}</h2>
            <div className="flex flex-col items-start">
              <h1 className={`text-2xl text-${props.color}-400`}>R${props.value}</h1>
              <p className="text-gray-500 text-sm">{props.description}</p>
            </div>
          </section>
          <i className="absolute right-4 text-gray-600">{props.icon}</i>
        </div>
      </section>
    </div>
  )
}

export default Balons;
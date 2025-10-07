function Balons(props) {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className="flex justify-between border border-neutral-200 bg-white p-5 rounded-lg shadow-md w-70 h-35 relative">
        <section className="flex flex-col gap-6 items-start pl-2" >
          <h2 className="justify-end">{props.title}</h2>
          <div className="flex flex-col items-start">
            <h1 className={`text-2xl text-${props.color}-400`}>R${props.value}</h1>
            <p>{props.description}</p>
          </div>
        </section>
        <i className="absolute right-4">{props.icon}</i>
      </div>
    </div>
  )
}

export default Balons;
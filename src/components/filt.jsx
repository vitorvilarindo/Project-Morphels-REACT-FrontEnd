function  Filt ({type, start_date, end_date, onChangeType, onChangeStartDate, onChangeEndDate, options}) {
    return (
        <div className="flex items-center gap-2 w-full border border-gray-200 rounded-md p-2 ">
            <section className="flex flex-col items-start gap-2 w-full">
                <label htmlFor="type">Type</label>
                <select id="type" className="w-full text-sm bg-gray-100 p-2 rounded-sm items-center" value={type} onChange={onChangeType}>
                    <option value="All">Todos</option>
                    {options.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
            </section>

            <section className="flex flex-col items-start gap-2 w-full text-sm">
                <label htmlFor={"star_date"}> Start date</label>
                <input className="w-full bg-gray-100 p-2 rounded-sm" id={"star_date"} type={"date"} value={start_date} onChange={onChangeStartDate}/>
            </section>

            <section className="flex flex-col items-start gap-2 w-full text-sm">
                <label htmlFor={"end_year"}>End date</label>
                <input className="w-full bg-gray-100 p-2 rounded-sm" id={"end_year"} type={"date"} value={end_date} onChange={onChangeEndDate}/>
            </section>
        </div>
    )
}

export default Filt;
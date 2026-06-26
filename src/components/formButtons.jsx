function FormButtons() {
    return (
        <div className="flex justify-center mt-4 gap-4">
            <button className="bg-neutral-950 text-white px-4 py-2 rounded hover:bg-neutral-600 transition-discrete">Submit</button> 
            <button className="bg-slate-100 text-black px-4 py-2 rounded hover:bg-slate-200 transition-discrete">Cancel</button>
        </div>
    )
}
export default FormButtons;
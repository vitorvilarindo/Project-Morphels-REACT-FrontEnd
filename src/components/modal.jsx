function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-white h-[30%] w-[25%] p-6 rounded-lg shadow-lg">
        <section className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p className="mb-4">This is a simple modal component.</p>
        </section>
        <section>
          <input type="text" placeholder="olá" />
        </section>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;

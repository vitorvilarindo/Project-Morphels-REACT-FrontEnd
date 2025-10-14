function Header2({title, description}) {
    return (
      <section className="flex">
          <nav className="flex flex-col items-baseline">
            <h2 className="font-bold">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
          </nav>
        </section>
    )
  }
export default Header2;
function Header2({title, description}) {
    return (
      <section className="flex">
          <nav className="flex flex-col items-baseline">
            <h2 className="font-bold">{title}</h2>
            <p className="text-destack-color text-sm">{description}</p>
          </nav>
        </section>
    )
  }
export default Header2;
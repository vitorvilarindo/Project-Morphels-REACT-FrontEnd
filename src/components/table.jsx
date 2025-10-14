import Header2 from "./header2.jsx";
import FormButtons from "./formButtons.jsx";
import OpenFromButton from "./openFromButton.jsx";
import DataBalons from "./dadaBalons.jsx";
function Table({header_title, header_description, button_title, category, data, title, value, description, color_value, color_categorty}) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[55vw] mt-8 p-4 bg-white border border-neutral-200 rounded-lg shadow-md gap-4">
        <section className="flex justify-between items-center">
          <Header2
            title={header_title}
            description={header_description}
          />
          <OpenFromButton>{button_title}</OpenFromButton>
        </section>
        <DataBalons
          category={category}
          data={data}
          title={title}
          value={value}
          description={description}
          color_value={color_value}
          color_categorty={color_categorty}
        />
      </div>
    </div>
  );
}

export default Table;

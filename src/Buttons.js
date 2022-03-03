import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="buttons_container">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="buttons_btn"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button className="buttons_btn" onClick={() => setItem(Data)}>
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;

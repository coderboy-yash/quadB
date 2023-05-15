import "../App.css";

const DropdownMenu = (props) => {
  const { name, items = [] } = props;
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, i) => (
          <li key={i}>
            <a className="dropdown-item" href="">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;

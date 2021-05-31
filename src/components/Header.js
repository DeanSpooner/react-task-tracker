import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "#f17d7d" : "#0071ff"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS: const headingStyle = { color: "red", backgroundColor: "black" };
// - THEN PASS IN headingStyle in style={}

export default Header;

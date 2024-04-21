import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

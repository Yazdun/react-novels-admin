import s from "./styles.module.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

export const Input = ({ type, id, name, placeholder, label, onChange }) => {
  return (
    <div className={classnames(s.field)}>
      <input
        className={classnames(s.input)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

      <label className={classnames(s.label)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
};

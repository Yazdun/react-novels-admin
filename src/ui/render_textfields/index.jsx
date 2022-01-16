import { Textfield } from "../textfield";
import PropTypes from "prop-types";
import s from "./styles.module.scss";
export const RenderTextfields = ({ textfields }) => {
  return (
    <>
      {textfields.map((textfield, index) => {
        const { type, id, name, placeholder, validation, label, multiline } =
          textfield;

        return (
          <Textfield
            key={index}
            type={type}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            validation={validation}
            multiline={multiline ? true : false}
          />
        );
      })}
    </>
  );
};

RenderTextfields.propTypes = {
  textfields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      validation: PropTypes.object,
      label: PropTypes.string.isRequired,
      multiline: PropTypes.bool,
    })
  ).isRequired,
};

import s from "./styles.module.scss";
import { useFormContext } from "react-hook-form";
import { filterError, isError } from "./helpers";
import classnames from "classnames";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

export const Textfield = ({
  type,
  id,
  name,
  placeholder,
  validation,
  label,
  multiline,
  customClass,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  const e = filterError({ errors, name });
  const isErr = isError(e);

  return (
    <div
      className={classnames(
        s.field,
        isErr && s.fieldErr,
        customClass && customClass
      )}
    >
      {multiline ? (
        <textarea
          className={classnames(s.textfield, s.textarea)}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      ) : (
        <input
          className={classnames(s.textfield)}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      )}

      <label className={classnames(s.label)} htmlFor={id}>
        {label}
      </label>
      {isErr && (
        <div className={s.err}>
          <BsFillExclamationCircleFill />
          <p>{e.error.message}</p>
        </div>
      )}
    </div>
  );
};

Textfield.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
};

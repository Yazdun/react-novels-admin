import s from "./styles.module.scss";
import { useFormContext } from "react-hook-form";
import { filterError, isError } from "./helpers";
import classnames from "classnames";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Loading } from "../../components";

export const Textfield = ({
  type,
  id,
  name,
  placeholder,
  validation,
  label,
  multiline,
  loading,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  const e = filterError({ errors, name });
  const isErr = isError(e);

  if (loading)
    return (
      <div className={s.loading}>
        <Loading height={60} />
      </div>
    );

  return (
    <div className={classnames(s.field, isErr && s.fieldErr)}>
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

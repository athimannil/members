import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, value, placeholder, error}) => {
  console.log(name)
  console.log(label);
  console.log(onChange);
  console.log(value);
  console.log(placeholder);
  console.log(error);

  let wrapperClass = 'form-group';
  // if (error & error.length > 0) {
  //   wrapperClass += ' ' + 'has-error';
  // }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;

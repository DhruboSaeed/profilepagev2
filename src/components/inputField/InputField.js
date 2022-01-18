import React from "react";
import '../Login/login.css'

const InputField = ({ value, label, name, placeholder,error, className , onBlur,type, onChange }) => (
  <div className="input">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      style={error && {border: 'solid 1px red'}}
    />
     { error && <p>{ error }</p>}
  </div>
);

export default InputField;

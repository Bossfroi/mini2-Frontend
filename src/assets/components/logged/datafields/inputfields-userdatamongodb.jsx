import React from 'react';
import PropTypes from 'prop-types';

function InputField({ label, name, value, onChange, item }) {
  return (
    
    <div>
 
      <label htmlFor={name} className="block text-gray-700">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={name}
        required
        name={name}
        autoComplete="on"
        placeholder={item}
        autoCapitalize='characters'
        
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      
    </div>
    
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
};

export default InputField;

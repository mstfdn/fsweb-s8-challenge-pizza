import React from "react";
import PropTypes from "prop-types";
import "./CustomRadioGroup.css";

const CustomRadioGroup = ({ name, options, value, onChange }) => {
  return (
    <div className="custom-radio-group">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`custom-radio-button ${
            value === option.value ? "selected" : ""
          }`}
          onClick={() => onChange(name, option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

CustomRadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomRadioGroup;
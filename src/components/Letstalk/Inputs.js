import React, { useState, useEffect } from 'react';

const Inputs = ({ fields, onInputChange, clearInputs }) => {
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    // Clear inputs when clearInputs changes
    if (clearInputs) {
      setInputData({});
    }
  }, [clearInputs]);

  const handleInputChange = (fieldName, value) => {
    setInputData({
      ...inputData,
      [fieldName]: value
    });
    onInputChange(fieldName, value);
  };

  const handleMultiSelectChange = (fieldName, value) => {
    const currentValues = inputData[fieldName] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];

    setInputData({
      ...inputData,
      [fieldName]: newValues
    });
    onInputChange(fieldName, newValues);
  };

  const renderField = (field, index) => {
    if (field.inputType === 'textarea') {
      return (
        <textarea
          key={index}
          id={field.fieldName.toLowerCase()}
          name={field.fieldName.toLowerCase()}
          value={inputData[field.fieldName.toLowerCase()] || ''}
          onChange={(e) => handleInputChange(field.fieldName.toLowerCase(), e.target.value)}
          className="peer py-2 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none focus:border-slate-500 focus:ring-1 focus:ring-cyan-500"
          placeholder={field.placeholder}
        />
      );
    } else if (field.inputType === 'dropdown' && Array.isArray(field.options)) {
      return (
        <select
          key={index}
          id={field.fieldName.toLowerCase()}
          name={field.fieldName.toLowerCase()}
          value={inputData[field.fieldName.toLowerCase()] || ''}
          onChange={(e) => handleInputChange(field.fieldName.toLowerCase(), e.target.value)}
          className="select peer py-2 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-200 placeholder-transparent ease-in-out focus:border-slate-500 focus:ring-1 focus:ring-cyan-500"
        >
          <option disabled value="" className='option'>Select Option</option>
          {field.options.map((option, optionIndex) => (
            <option key={optionIndex} value={option} className='option'>{option}</option>
          ))}
        </select>
      );
    } else if (field.inputType === 'multiselect' && Array.isArray(field.options)) {
      return (
        <div key={index} className="multiselect-container">
          {field.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`${field.fieldName.toLowerCase()}-${optionIndex}`}
                name={field.fieldName.toLowerCase()}
                value={option}
                checked={(inputData[field.fieldName.toLowerCase()] || []).includes(option)}
                onChange={() => handleMultiSelectChange(field.fieldName.toLowerCase(), option)}
                className="ml-8 mr-2 w-4 h-4 leading-tight bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none focus:border-slate-500 focus:ring-1 focus:ring-cyan-500"
              />
              <label htmlFor={`${field.fieldName.toLowerCase()}-${optionIndex}`} className="text-gray-200">
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <input
          key={index}
          type={field.datatype}
          id={field.fieldName.toLowerCase()}
          name={field.fieldName.toLowerCase()}
          value={inputData[field.fieldName.toLowerCase()] || ''}
          maxLength={field.max}
          onChange={(e) => {
            const inputValue = e.target.value.slice(0, field.max); // Limit input value to maximum length
            handleInputChange(field.fieldName.toLowerCase(), inputValue);
          }}
          className="peer py-2 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none focus:border-slate-500 focus:ring-1 focus:ring-cyan-500"
          placeholder={field.placeholder}
        />
      );
    }
  };

  return (
    <div className="mx-auto md:w-3/4 lg:w-4/5 mt-4">
      <div className="-m-2 flex flex-wrap">
        {fields.map((field, index) => (
          <div key={index} className="w-full p-3 mt-3">
            <div className="relative">
              {renderField(field, index)}
              <label
                htmlFor={field.fieldName.toLowerCase()}
                className="absolute left-3 -top-7 bg-transparent text-sm leading-7 text-gray transition-all font-semibold"
              >
                {field.fieldName}
                <sup className="text-Trialprimary1 text-xs ms-1">*</sup>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inputs;

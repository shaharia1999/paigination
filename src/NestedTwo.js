import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';

const NestedTwo = () => {
  const initialOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const [options, setOptions] = useState(initialOptions);
<<<<<<< HEAD
  const [selectedValues, setSelectedValues] = useState([initialOptions[0]]);
  console.log(selectedValues);
  const obj = { value: 'shaharia', label: 'shaharia' };

  const HandlePush = () => {
    // Filter out the newly added item from the options array
    const updatedOptions = options.filter(option => option.value !== obj.value);
    
    setOptions([obj, ...updatedOptions]);
    setSelectedValues([obj]); // Set the default value when adding a new option
    console.log(options);
=======
  const [selectedValues, setSelectedValues] = useState([]);
  const [newDefaultValue, setNewDefaultValue] = useState(null); // Store the new default value

  const obj = { value: 'shaharia', label: 'shaharia' };

  const handlePush = () => {
    setNewDefaultValue(obj);
    setSelectedValues([obj]);
   
  };
  // console.log(selectedValues)
  const handleSelectBlur = () => {
    // Check if the new default value is selected
    if (newDefaultValue && !selectedValues.some((selected) => selected.value === newDefaultValue.value)) {
      // Remove the new default value from the options
      const updatedOptions = options.filter((option) => option.value !== newDefaultValue.value);
      setOptions(updatedOptions);
      setNewDefaultValue(null); // Reset the new default value
    }
>>>>>>> 6c95ca5ce24732e890ed3fb04148f19e29ba8766
  };

  return (
    <div>
      <h1 onClick={handlePush}>Two</h1>
      <Select
     
        value={selectedValues}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        key={options.length}
        onChange={(selectedOptions) => setSelectedValues(selectedOptions)}
        onBlur={handleSelectBlur}
      
      />
    </div>
  );
};

export default NestedTwo;

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
  const [selectedValues, setSelectedValues] = useState([]);
  const [newDefaultValue, setNewDefaultValue] = useState(null); // Store the new default value

  const obj = { value: 'shaharia', label: 'shaharia' };

  const handlePush = () => {
    setNewDefaultValue(obj);
    setSelectedValues([obj]);
   
  };
  console.log(selectedValues)
  const handleSelectBlur = () => {
    // Check if the new default value is selected
    // if (newDefaultValue && !selectedValues.some((selected) => selected.value === newDefaultValue.value)) 
    // Check if the new default value is selected
    // if (newDefaultValue && !selectedValues.some((selected) =>{
    //   console.log(selected);
    // } )) 
    // {
     
      // Remove the new default value from the options
      const updatedOptions = options.filter((option) => option.value !== newDefaultValue.value);
      setOptions(updatedOptions);
      setNewDefaultValue(null); // Reset the new default value
    }
  // };

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

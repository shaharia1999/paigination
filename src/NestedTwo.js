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
  const [selectedValues, setSelectedValues] = useState([initialOptions[0]]);
  console.log(selectedValues);
  const obj = { value: 'shaharia', label: 'shaharia' };

  const HandlePush = () => {
    // Filter out the newly added item from the options array
    const updatedOptions = options.filter(option => option.value !== obj.value);
    
    setOptions([obj, ...updatedOptions]);
    setSelectedValues([obj]); // Set the default value when adding a new option
    console.log(options);
  };

  return (
    <div>
      <h1 onClick={HandlePush}>Two</h1>
      <Select
        defaultValue={selectedValues}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        key={options.length} // Add a key to force re-render when options change
        onChange={(selectedOptions) => setSelectedValues(selectedOptions)}
      />
    </div>
  );
};

export default NestedTwo;

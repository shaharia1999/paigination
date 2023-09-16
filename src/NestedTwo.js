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

  const obj = { value: 'shaharia', label: 'shaharia' };

  const HandlePush = () => {
    setOptions([obj, ...options]);
    setSelectedValues([obj]); // Set the default value when adding a new option
    // alert('Option added successfully');
    console.log(options)
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
      />
    </div>
  );
};

export default NestedTwo;

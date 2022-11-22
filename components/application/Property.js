import { useEffect, useState } from 'react';
import FieldType from './FieldType';
import { changeFieldType } from './InputField/typeOptions';

export default function Property({ property, inputs, setInputs, activeField }) {
  const [options, setOptions] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (property[0] === 'options') {
      setOptions(property[1].join('\n'));
    } else {
      setValue(property[1]);
    }
  }, [property[1]]);

  const changeOptions = (e) => {
    setOptions(e.target.value.split('\n').join('\n'));
  };

  const updateOptions = () => {
    const allInputs = [...inputs];
    const newInputs = allInputs.map((input) => {
      if (input.id === activeField.id) {
        input.properties.options = options.split('\n');
        return input;
      }
      return input;
    });
    setInputs({}); // Setting inputs to an empty object so that it re-rerenders the DOM after setting the actual inputs
    setInputs([...newInputs]);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const updateValue = () => {
    const allInputs = [...inputs];
    const newInputs = allInputs.map((input) => {
      if (input.id === activeField.id) {
        input.properties[property[0]] = value;
        return input;
      }
      return input;
    });
    setInputs({}); // Setting inputs to an empty object so that it re-rerenders the DOM after setting the actual inputs
    setInputs([...newInputs]);
  };

  if (property[0] === 'type') {
    return (
      <div key={property[0]}>
        <FieldType
          types={property}
          onChange={(e) => changeFieldType(e, inputs, setInputs, activeField)}
        />
      </div>
    );
  } else if (property[0] === 'options') {
    return (
      <div key={property[0]} className="flex justify-between">
        <label className="text-sm p-3">{property[0]}</label>
        <textarea className="input" value={options} onChange={changeOptions} onBlur={updateOptions} />
      </div>
    );
  } else {
    return (
      <div key={property[0]} className="flex justify-between">
        <label className="text-sm p-3">{property[0]}</label>
        <input className="input" type="text" value={value} onChange={handleChange} onBlur={updateValue} />
      </div>
    );
  }
}

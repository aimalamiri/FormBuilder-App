import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import InputField from '../../components/application/InputField';
import Property from '../../components/application/Property';
// import { fields as formElements } from '../../utils/fields';

export default function Create() {
  const [inputs, setInputs] = useState([]);
  const [activeField, setActiveField] = useState({});

  const addInput = (field) => {
    setInputs([...inputs, { ...field, id: uuid() }]);
  };

  const fields = [
  {
    tagname: 'input',
    clsname: 'input',
    properties: {
      title: 'Textbox',
      type: { text: true, number: false, email: false, password: false },
      placeholder: '',
    },
  },
  {
    tagname: 'textarea',
    clsname: 'input',
    properties: {
      title: 'Textarea',
      placeholder: '',
    },
  },
  {
    tagname: 'checkbox',
    clsname: 'input',
    properties: {
      title: 'Checkbox',
      options: ['Option'],
    },
  },
  {
    tagname: 'radio',
    clsname: 'input',
    properties: {
      title: 'Radio',
      options: ['Option'],
    },
  },
  {
    tagname: 'select',
    clsname: 'input',
    properties: {
      title: 'Select',
      placeholder: 'Select an option',
      options: [],
    },
  },
];

  return (
    <div>
      <h1 className="text-3xl font-semibold">Create a new form</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        <div className="card">
          <h2 className="text-lg">Inputs</h2>
          {fields.map((field) => (
            <button
              className="btn btn-gray w-full mt-3"
              key={field.properties.title}
              onClick={() => addInput(field)}
            >
              {field.properties.title}
            </button>
          ))}
        </div>
        <div className="card col-span-2">
          <h2 className="text-lg">View</h2>
          {inputs.map((input) => (
            <div className="my-3" key={input.id}>
              <InputField input={input} setActiveField={setActiveField} key={input.id} />
            </div>
          ))}
        </div>
        <div className="card">
          <h2 className="text-lg">Properties</h2>
          {Object.entries(activeField).map((property) => {
            return property[0] !== 'id' ? (
              <div key={property[0]} className="my-3">
                <Property
                  property={property}
                  inputs={inputs}
                  setInputs={setInputs}
                  activeField={activeField}
                />
              </div>
            ) : (
              ''
            );
          })}
        </div>
      </div>
    </div>
  );
}

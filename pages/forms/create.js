import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import FieldType from '../../components/application/FieldType';

export default function Create() {
  const [inputs, setInputs] = useState([]);
  const [activeField, setActiveField] = useState({});
  const showProps = (field) => {
    setActiveField({ ...field.properties, id: field.id });
  };

  const fields = [
    {
      title: 'Textbox',
      tagname: 'input',
      clsname: 'input',
      properties: {
        type: { text: true, number: false, email: false, password: false },
        placeholder: '',
      },
    },
    {
      title: 'Textarea',
      tagname: 'textarea',
      clsname: 'input',
    },
    // {
    //   type: 'checkbox',
    //   title: 'Checkbox',
    //   tagname: 'input',
    //   clsname: 'input',
    // },
    // {
    //   type: 'radio',
    //   title: 'Radio',
    //   tagname: 'input',
    //   clsname: 'input',
    // },
    // {
    //   type: 'select',
    //   title: 'Select',
    //   tagname: 'select',
    //   clsname: 'input',
    // },
  ];

  const addInput = (field) => {
    setInputs([...inputs, { ...field, id: uuid() }]);
  };

  const getType = (types) => Object.entries(types).filter((type) => type[1] === true)[0][0];

  const changeFieldType = (e) => {
    const allInputs = [...inputs];
    const newInputs = allInputs.map((input) => {
      if (input.id === activeField.id) {
        const falseEntries = Object.entries(input.properties.type).map((t) => {
          if (t[0] === e.target.value) {
            t[1] = true;
          } else {
            t[1] = false;
          }
          return [t[0], t[1]];
        });
        const types = Object.fromEntries(falseEntries);
        input.properties.type = types;
        return input;
      }
      return input;
    });
    setInputs({});
    setInputs([...newInputs]);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Create a new form</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        <div className="card">
          <h2 className="text-lg">Inputs</h2>
          {fields.map((field) => (
            <button
              className="btn btn-gray w-full mt-3"
              key={field.title}
              onClick={() => addInput(field)}
            >
              {field.title}
            </button>
          ))}
        </div>
        <div className="card col-span-2">
          <h2 className="text-lg">View</h2>
          {inputs.map((input) => (
            <input.tagname
              className={input.clsname}
              type={getType(input.properties.type)}
              key={input.id}
              onClick={() => showProps(input)}
            />
          ))}
        </div>
        <div className="card">
          <h2 className="text-lg">Properties</h2>
          {Object.entries(activeField).map((property) => (
            <div key={property[0]} className="mt-4">
              {property[0] !== 'type' ? (
                <div key={property[0]} className="flex justify-between">
                  <label className="text-sm p-3">{property[0]}</label>
                  <input className="input" type="text" value={property[1]} />
                </div>
              ) : (
                <div key={property[0]}>
                  <FieldType types={property} onChange={changeFieldType} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

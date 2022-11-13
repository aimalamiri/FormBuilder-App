import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Create() {
  const [inputs, setInputs] = useState([]);

  const types = [
    {
      type: 'input',
      title: 'Textbox',
      tagname: 'input',
      clsname: 'input',
    },
    {
      title: 'Textarea',
      tagname: 'textarea',
      clsname: 'input',
    },
    {
      type: 'checkbox',
      title: 'Checkbox',
      tagname: 'input',
      clsname: 'input',
    },
    {
      type: 'radio',
      title: 'Radio',
      tagname: 'input',
      clsname: 'input',
    },
    {
      type: 'select',
      title: 'Select',
      tagname: 'select',
      clsname: 'input',
    },
  ];

  const addInput = (type) => {
    setInputs([...inputs, {...type, id: uuid()}]);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Create a new form</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        <div className="card">
          <h2 className="text-lg">Inputs</h2>
          {types.map((type) => (
            <button
              className="btn btn-gray w-full mt-3"
              key={type.type}
              onClick={() => addInput(type)}
            >
              {type.title}
            </button>
          ))}
        </div>
        <div className="card col-span-2">
          <h2 className="text-lg">View</h2>
          {inputs.map((input) => (
            <input.tagname className={input.clsname} type={input.type} key={input.id} />
          ))}
        </div>
        <div className="card">
          <h1>Props</h1>
        </div>
      </div>
    </div>
  );
}

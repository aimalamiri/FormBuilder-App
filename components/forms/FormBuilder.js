import { redirect } from 'next/dist/server/api-utils';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';
import { createForm, updateForm } from '../../api/forms';
import InputField from '../application/InputField';
import Property from '../application/Property';

export default function FormBuilder({ type, inputsData, formData, id }) {
  const [inputs, setInputs] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [activeField, setActiveField] = useState({});

  useEffect(() => {
    if (formData) setForm(formData);
    if (inputsData) setInputs(inputsData);
  }, [formData, inputsData]);

  const addInput = (field) => {
    setInputs([...inputs, { ...field, id: uuid() }]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addForm = () => {
    createForm({ ...form, fields: JSON.stringify(inputs) }).then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Form has be created successfully!',
      });
      setForm({ name: '', description: '' });
      setInputs([]);
    });
  };

  const updateFormData = () => {
    updateForm({ ...form, fields: JSON.stringify(inputs) }, id).then((res) => {
      Swal.fire({
        icon: 'info',
        title: 'Form has be updated successfully!',
      });
      // redirect('/forms');
    });
  };

  const submitForm = () => {
    if (type === 'create') addForm();
    if (type === 'update') updateFormData();
  }

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
    <div className="min-h-[90vh]">
      <div className="card grid grid-cols-2 gap-4">
        <label className="flex justify-end items-center gap-2" htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            id="name"
          />
        </label>
        <label className="flex justify-start items-center gap-2" htmlFor="description">
          Description:
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="input w-full"
            id="description"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-2">
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
      <div className="card sticky right-0 left-0 top-full text-right">
        <button className="btn btn-success mr-7" onClick={submitForm}>
          Save
        </button>
      </div>
    </div>
  );
}

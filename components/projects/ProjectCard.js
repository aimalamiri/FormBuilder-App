import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function ProjectCard({ project }) {
  const [editable, setEditable] = useState(true);
  const [data, setData] = useState(project);

  const edit = () => {
    setEditable(!editable);
  };

  const changeDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const changeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  return (
    <div className="p-5 bg-white shadow rounded hover:shadow-lg">
      <ContentEditable
        className="text-xl font-bold mb-4 focus:outline-none w-full"
        html={data.name}
        disabled={editable}
        onChange={changeName}
        onBlur={edit}
      />
      <div className="flex justify-between items-end">
        <ContentEditable
          html={data.description}
          disabled={editable}
          onChange={changeDescription}
          className="focus:outline-none w-full"
          onBlur={edit}
        />
        {editable ? (
          <button onClick={edit}>
            <PencilIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        ) : (
          <button>
            <CheckIcon className="h-5 w-5 text-green-700 hover:text-green-600" />
          </button>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { PencilIcon, CheckIcon, NoSymbolIcon, TrashIcon } from '@heroicons/react/24/solid';
import { updateProject } from '../../api/projects';

export default function ProjectCard({ project }) {
  const [editable, setEditable] = useState(true);
  const [data, setData] = useState(project);

  const edit = () => {
    setEditable(!editable);
  };

  const discard = () => {
    setData(project);
    setEditable(true);
  };

  const changeDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const changeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const update = () => {
    updateProject(data, project.id).then((res) => {
      if (res) {
        setEditable(true);
      }
      return true;
    });
  };

  return (
    <div className="p-5 bg-white shadow rounded hover:shadow-lg">
      <ContentEditable
        className="text-xl font-bold mb-4 focus:outline-none w-full"
        html={data.name}
        disabled={editable}
        onChange={changeName}
      />
      <ContentEditable
        html={data.description}
        disabled={editable}
        onChange={changeDescription}
        className="focus:outline-none w-full"
      />
      <div className="flex justify-end items-end mt-2 gap-3">
        {editable ? (
          <button onClick={edit}>
            <PencilIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        ) : (
          <>
            <button onClick={update} className="bg-gray-50 border-5 p-2">
              <CheckIcon className="h-5 w-5 text-green-700 hover:text-green-600" />
            </button>
            <button>
              <TrashIcon className="h-5 w-5 text-red-600 hover:text-red-500" />
            </button>
            <button onClick={discard}>
              <NoSymbolIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

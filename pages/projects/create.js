import Input from '../../components/application/input';
import TextArea from '../../components/application/textarea';

import { useState } from 'react';
import { createProject } from '../../api/projects';

export default function Create() {
  const data = { name: '', description: '' };
  const [project, setProject] = useState(data);
  const { name, description } = project;
  const [success, setSuccess] = useState(false);

  const add = (e) => {
    e.preventDefault();
    createProject(project).then(res => {
      setProject(data);
      setSuccess(true);
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  return (
    <div className="card w-1/3 mx-auto">
      <h1 className="text-xl text-center mb-9">Create Project</h1>
      {success ? <div className="my-4 p-5 bg-green-700 text-white">The project has been created successfully!</div> : '' }
      <form onSubmit={add}>
        <Input
          name="name"
          placeholder="Enter project name"
          value={name}
          className="mb-4"
          onChange={handleChange}
        />
        <TextArea
          name="description"
          placeholder="Enter project description"
          value={description}
          onChange={handleChange}
        />
        <div className="text-end">
          <button className="btn btn-success mt-4">Create</button>
        </div>
      </form>
    </div>
  );
}

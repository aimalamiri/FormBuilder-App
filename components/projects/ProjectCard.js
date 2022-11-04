import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="p-5 bg-white shadow rounded hover:shadow-lg">
      <h2 className="text-xl font-bold mb-4">{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

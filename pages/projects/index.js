import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProjects } from '../../api/projects';
import ProjectCard from '../../components/projects/ProjectCard';
import useAuth from '../../utils/useAuth';

export default function Projects() {
  useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <Link href="/projects/create">
        <button className="btn btn-success mt-4">Create Project</button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        {projects.length > 0 ? (
          projects.map((project) => <ProjectCard project={project} key={project.id} />)
        ) : (
          <p>No projects yet.</p>
        )}
      </div>
    </div>
  );
}

import ProjectCard from '../../components/projects/ProjectCard';
import useAuth from '../../utils/useAuth';

export default function Projects() {
  useAuth();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        <ProjectCard project={{name: 'project 1', description: 'project 1 description'}} />
      </div>
    </div>
  );
}

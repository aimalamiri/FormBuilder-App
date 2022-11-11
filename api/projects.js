import axios from '../config/axios';

export const getProjects = async () => {
  if (typeof window !== 'undefined') {
    return await axios
      .get('/api/projects')
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

export const createProject = async (project) => {
  if (typeof window !== 'undefined') {
    return await axios
      .post('/api/projects', {project})
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

export const updateProject = async (project, id) => {
  if (typeof window !== 'undefined') {
    return await axios
      .patch(`/api/projects/${id}`, {project})
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

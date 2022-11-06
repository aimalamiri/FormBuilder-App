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

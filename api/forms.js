import axios from '../config/axios';

export const createForm = async (form) => {
  console.log(form);
  if (typeof window !== 'undefined') {
    return await axios
      .post('/api/forms', {form})
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

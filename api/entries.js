import axios from '../config/axios';

export const getForm = async (id) => {
  if (typeof window !== 'undefined') {
    return await axios
      .get(`/api/entries/form/${id}`)
      .then((res) => {
        return res;
      })
      .catch((error) => error);
  }
};;

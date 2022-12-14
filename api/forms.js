import axios from '../config/axios';

export const getForms = async () => {
  if (typeof window !== 'undefined') {
    return await axios
      .get('/api/forms')
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

export const editForm = async (id) => {
  if (typeof window !== 'undefined') {
    return await axios
      .get(`/api/forms/${id}/edit`)
      .then((res) => {
        return res;
      })
      .catch((error) => error);
  }
};

export const updateForm = async (form, id) => {
  if (typeof window !== 'undefined') {
    return await axios
      .put(`/api/forms/${id}`, { form })
      .then((res) => {
        return res;
      })
      .catch((error) => error);
  }
};

export const createForm = async (form) => {
  if (typeof window !== 'undefined') {
    return await axios
      .post('/api/forms', { form })
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

export const deleteForm = async (id) => {
  if (typeof window !== 'undefined') {
    return await axios
      .delete(`/api/forms/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
};

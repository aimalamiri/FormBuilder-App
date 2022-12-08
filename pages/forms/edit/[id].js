import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { editForm } from '../../../api/forms';
import FormBuilder from '../../../components/forms/FormBuilder';

export default function Edit() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [inputs, setInputs] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    editForm(id)
      .then((res) => {
        if (res.status === 200) {
          const { name, description, fields } = res.data;
          setForm({ name: name, description: description });

          setInputs(JSON.parse(fields));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-[90vh]">
      <h1 className="text-3xl font-semibold mb-4">Edit this form</h1>
      <FormBuilder type="update" inputsData={inputs} formData={form} id={id} />
    </div>
  );
}

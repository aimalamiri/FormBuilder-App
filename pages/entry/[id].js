import { useRouter } from 'next/router';
import { getForm } from '../../api/entries';
import { useState } from 'react';

export default function Entry() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const start = () => {
    getForm(id).then((res) => {
      if (res.status === 200) {
        setForm(JSON.parse(res.data.fields));
        setName(res.data.name);
        setDescription(res.data.description);
      }
    });
  };

  return (
    <div>
      <div className="card text-center">
        <h1 className="text-5xl">Welcome!</h1>
        <h2 className="text-2xl my-2">Begin your entry by clicking on the button bellow</h2>
        <button className="btn btn-success my-10" onClick={start}>
          Start
        </button>
      </div>
    </div>
  );
}

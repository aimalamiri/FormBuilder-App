import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { getForms } from '../../api/forms';

export default function Index() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms().then((res) => {
      setForms(res);
    });
  }, []);

  console.log(forms);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Forms</h1>
      <Link href="/forms/create">
        <button className="btn btn-success mt-4">Create Form</button>
      </Link>

      <div className="card mt-5">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="px-5">Name</th>
              <th className="px-5">Description</th>
              <th className="px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form.id} className="hover:bg-gray-100">
                <td className="px-5">{form.name}</td>
                <td className="px-5">{form.description}</td>
                <td className="px-5">
                  <button className="btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

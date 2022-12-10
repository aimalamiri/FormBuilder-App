import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteForm, getForms } from '../../api/forms';

export default function Index() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms().then((res) => {
      setForms(res);
    });
  }, []);

  const removeForm = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#15803d',
      cancelButtonColor: '#b91c1c',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteForm(id).then((res) => {
          setForms([]);
          Swal.fire('Deleted!', 'The form has been deleted.', 'success');
        });
      }
    });
  };

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
                <td className="px-5 py-2">{form.name}</td>
                <td className="px-5 py-2">{form.description}</td>
                <td className="px-5 py-2 flex gap-2">
                  <button className="btn btn-success btn-sm flex items-center gap-2">
                    <EyeIcon className="h-5 w-5 text-white" />
                    View
                  </button>
                  <Link href={`/forms/edit/${form.id}`}>
                    <button className="btn btn-success btn-sm flex items-center gap-2">
                      <EyeIcon className="h-5 w-5 text-white" />
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-sm btn-red flex items-center gap-2"
                    onClick={() => removeForm(form.id)}
                  >
                    <TrashIcon className="h-5 w-5 text-white" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

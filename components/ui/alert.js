import React from 'react';

export default function Alert({ type, message, status }) {
  const types = {
    success: 'bg-green-700',
    error: 'bg-red-700',
    info: 'bg-blue-700',
    warning: 'bg-orange-700',
  };

  if (status) {
    return <div className={`my-4 p-5 ${types[type]} text-white`}>{message}</div>;
  }

  return null;
}

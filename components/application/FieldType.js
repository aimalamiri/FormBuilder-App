import React from 'react';

export default function FieldType({ types, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="text-sm p-3">{types[0]}</label>
      <select className="input" onChange={onChange}>
        {Object.entries(types[1]).map((type) => (
          <option value={type[0]} key={type[0]}>
            {type[0]}
          </option>
        ))}
      </select>
    </div>
  );
}

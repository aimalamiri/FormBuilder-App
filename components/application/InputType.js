import React from 'react';
import { ucFirst } from '../../utils/strings';

export default function InputType({ types, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="py-3" htmlFor={types[0]}>
        {ucFirst(types[0])}
        <select className="input" onChange={onChange}>
          {Object.entries(types[1]).map((type) => (
            <option value={type[0]} key={type[0]}>
              {type[0]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

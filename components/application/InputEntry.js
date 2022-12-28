import { getType } from './InputField/typeOptions';

export default function InputEntry({ input, onChange }) {
  if (input.tagname === 'input') {
    return (
      <label htmlFor={input.id}>
        {input.properties.title}
        <input.tagname
          className={input.clsname}
          type={getType(input.properties.type)}
          key={input.id}
          id={input.id}
          placeholder={input.properties.placeholder}
          onChange={onChange}
        />
      </label>
    );
  } else if (input.tagname === 'textarea') {
    return (
      <label htmlFor={input.id}>
        {input.properties.title}
        <input.tagname
          className={input.clsname}
          id={input.id}
          placeholder={input.properties.placeholder}
          onChange={onChange}
        />
      </label>
    );
  } else if (input.tagname === 'checkbox') {
    return (
      <div>
        {input.properties.title}
        <div className="flex items-center gap-6 flex-wrap">
          {input.properties.options.map((option) => (
            <label htmlFor={option} key={option} className="flex items-center">
              {option}
              <input type="checkbox" className="ml-2" name={input.id} id={input.id} value={option} onChange={onChange} />
            </label>
          ))}
        </div>
      </div>
    );
  } else if (input.tagname === 'radio') {
    return (
      <div>
        {input.properties.title}
        <div className="flex items-center gap-6 flex-wrap">
          {input.properties.options.map((option) => (
            <label htmlFor={option} key={option} className="flex items-center">
              {option}
              <input type="radio" className="ml-2" name={input.id} id={input.id} value={option} onChange={onChange} />
            </label>
          ))}
        </div>
      </div>
    );
  } else if (input.tagname === 'select') {
    return (
      <label htmlFor={input.id}>
        {input.properties.title}
        <input.tagname
          className={input.clsname}
          id={input.id}
          placeholder={input.properties.placeholder}
          onChange={onChange}
        >
          {input.properties.options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </input.tagname>
      </label>
    );
  }
}

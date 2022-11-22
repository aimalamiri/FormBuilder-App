import { getType } from './InputField/typeOptions';

export default function InputField({ input, setActiveField }) {
  const showProps = (field) => {
    setActiveField({ ...field.properties, id: field.id });
  };

  if (input.tagname === 'input') {
    return (
      <label htmlFor={input.id}>
        {input.properties.title}
        <input.tagname
          className={input.clsname}
          type={getType(input.properties.type)}
          key={input.id}
          onClick={() => showProps(input)}
          placeholder={input.properties.placeholder}
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
          onClick={() => showProps(input)}
          placeholder={input.properties.placeholder}
        />
      </label>
    );
  } else if (input.tagname === 'checkbox') {
    return (
      <div onClick={() => showProps(input)} className="my-4">
        {input.properties.title}
        <div className="flex items-center gap-6 flex-wrap">
          {input.properties.options.map((option) => (
            <label htmlFor={option} key={option} className="flex items-center">
              {option}
              <input type="checkbox" className="ml-2" id={option} value={option} />
            </label>
          ))}
        </div>
      </div>
    );
  } else if (input.tagname === 'radio') {
    return (
      <div onClick={() => showProps(input)} className="my-4">
        {input.properties.title}
        <div onClick={() => showProps(input)} className="flex items-center gap-6 flex-wrap my-5">
          {input.properties.options.map((option) => (
            <label htmlFor={option} key={option} className="flex items-center">
              {option}
              <input type="radio" className="ml-2" id={option} name={input.id} value={option} />
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
          onClick={() => showProps(input)}
          placeholder={input.properties.placeholder}
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

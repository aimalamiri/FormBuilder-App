import { getType } from './InputField/typeOptions';

export default function InputField({ input, setActiveField }) {
  const showProps = (field) => {
    setActiveField({ ...field.properties, id: field.id });
  };

  if (input.tagname === 'input') {
    return (
      <input.tagname
        className={input.clsname}
        type={getType(input.properties.type)}
        key={input.id}
        onClick={() => showProps(input)}
      />
    );
  } else if (input.tagname === 'textarea') {
    return (
      <input.tagname className={input.clsname} key={input.id} onClick={() => showProps(input)} />
    );
  } else if (input.tagname === 'checkbox') {
    return (
      <div onClick={() => showProps(input)}>
        {input.properties.options.map((option) => (
          <label for={option} key={option}>
            {option}
            <input
              type="checkbox"
              className={input.clsname}
              id={option}
              value={option}
            />
          </label>
        ))}
      </div>
    );
  } else if (input.tagname === 'radio') {
    return (
      <div onClick={() => showProps(input)}>
        {input.properties.options.map((option) => (
          <label for={option} key={option}>
            {option}
            <input
              type="radio"
              className={input.clsname}
              id={option}
              name={input.id}
              value={option}
            />
          </label>
        ))}
      </div>
    );
  } else if (input.tagname === 'select') {
    return (
      <input.tagname className={input.clsname} key={input.id} onClick={() => showProps(input)}>
        {input.properties.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </input.tagname>
    );
  }
}

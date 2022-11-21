import { getType } from './InputField/inputOptions';

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
  } else if (input.tagname === 'select') {
    return (
      <input.tagname className={input.clsname} key={input.id} onClick={() => showProps(input)}>
        {input.properties.options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </input.tagname>
    );
  }
}

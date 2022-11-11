export default function Input({name, value, onChange, placeholder = '', label = name, className = '', required = false })
{
  return (
    <label htmlFor="email" className="label">
      {label.charAt(0).toUpperCase() + label.slice(1)}
      <textarea
        name={name}
        placeholder={placeholder}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

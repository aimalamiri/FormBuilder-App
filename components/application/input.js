export default function Input({ type = 'text', name, value, onChange, placeholder = '', label = name, className = '' })
{
  return (
    <label htmlFor="email" className="label">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

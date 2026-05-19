function InputField({
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export default InputField;
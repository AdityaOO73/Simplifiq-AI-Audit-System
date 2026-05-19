function TextAreaField({
  name,
  value,
  onChange,
}) {
  return (
    <textarea
      rows="4"
      placeholder="Tell us about your business goals..."
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
    ></textarea>
  );
}

export default TextAreaField;
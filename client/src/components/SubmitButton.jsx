function SubmitButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
    >
      {loading ? "Generating..." : "Generate Audit Report"}
    </button>
  );
}

export default SubmitButton;
const Input = () => {
  return (
    <div className="flex justify-center items-center p-4 gap-4  bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter Text"
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
        Add
      </button>
    </div>
  );
};

export default Input;

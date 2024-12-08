const Default = () => {
  return (
    <div className="flex p-6 space-x-4">
      <div className="flex-1 bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Left Column</h2>
        <p>This column will take up more space compared to the other column.</p>
      </div>
      <div className="w-1/4 bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Right Column</h2>
        <p>This column takes up less space. It is fixed at 25% of the container width.</p>
      </div>
    </div>
  );
};

export default Default;

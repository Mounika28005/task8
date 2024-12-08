
const Taiwand = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-blue-500 p-4 text-white">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2 hover:bg-blue-600 cursor-pointer">Home</li>
          <li className="py-2 hover:bg-blue-600 cursor-pointer">About</li>
          <li className="py-2 hover:bg-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <h1 className="text-xl font-semibold">Header</h1>
        </header>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold">Content Area</h2>
          <p className="mt-4 text-gray-700">
            This is a simple layout with a sidebar and header using Tailwind CSS in React.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Taiwand;

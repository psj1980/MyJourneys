/**
 * @remarks
 * - Dummy destination component for loading states.
 *
 * @returns React component with dummy destination
 */
export default function DummyDestination() {
  return (
    <div className="flex flex-col justify-between items-center border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white">
      <img
        className="w-auto h-48 mb-4 object-cover rounded-lg"
        src={`/Images/dummy.jpeg`}
        alt="Loading..."
      />
      <h2 className="text-xl font-semibold text-gray-700 opacity-90 text-center w-32 h-6 mb-2 animate-pulse">
        Loading...
      </h2>
    </div>
  );
}

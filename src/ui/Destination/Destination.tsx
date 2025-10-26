import { type Destination } from "../../types/destination";

type DestinationProps = {
  destination: Destination;
};

export default function Destination({
  destination,
}: Readonly<DestinationProps>) {
  const { name, country, description, imageUrl, bestTimeToVisit, visits } =
    destination;

  return (
    <article
      className="flex flex-col justify-between items-center 
    border border-border 
    p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white
    dark:bg-soft-beach-dark-sand-700 dark:border-neutral-600 dark:text-secondary-text"
    >
      <img
        className="w-auto h-48 mb-4 object-cover rounded-lg"
        src={`/Images/${imageUrl}`}
        alt={name}
      />
      <h2 className="text-xl font-semibold text-center">
        {name}, {country}
      </h2>
      <p className="text-xs text-center p-2">{description}</p>
      <p className="text-md text-center font-bold">
        Best time to visit: {bestTimeToVisit}
      </p>
      <p className="text-md text-center">Number of visits: {visits.length}</p>
    </article>
  );
}

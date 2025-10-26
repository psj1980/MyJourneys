import { type Destination } from "../../types/destination";

export type DestinationProps = Destination;

/**
 * Destination component displays information about a travel destination.
 *
 * @param props - The props for the destination component.
 *
 * @param props.name - The name of the destination.
 *
 * @param props.country - The country where the destination is located.
 *
 * @param props.description - A brief description of the destination.
 *
 * @param props.imageUrl - URL of an image representing the destination.
 *
 * @param props.bestTimeToVisit - Recommended time to visit the destination.
 *
 * @param props.visits - An array of dates representing past visits to the destination.
 *
 * @returns The rendered destination component.
 */
export default function Destination({
  name,
  country,
  description,
  imageUrl,
  bestTimeToVisit,
  visits,
}: Readonly<DestinationProps>) {
  return (
    <article
      className="flex flex-col justify-between items-center 
    border border-border 
    p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white
    dark:bg-soft-beach-dark-sand-700 dark:border-neutral-600 dark:text-secondary-text"
    >
      {imageUrl && (
        <img
          className="w-auto h-48 mb-4 object-cover rounded-lg"
          src={`/Images/${imageUrl}`}
          alt={name}
        />
      )}
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

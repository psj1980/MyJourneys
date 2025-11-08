import { type Destination } from "../../../types/destination";
import ArticleContainer from "../../ArticleContainer/ArticleContainer";

export type DestinationProps = Destination & {
  isLoading: boolean;
};

/**
 * Destination component displays information about a travel destination.
 *
 * @param props.id - The unique identifier for the destination.
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
 * @param props.isLoading - Indicates if the data is still loading.
 *
 * @returns The rendered destination component.
 */
export default function DestinationListItem({
  id,
  name,
  country,
  description,
  imageUrl,
  bestTimeToVisit,
  visits,
  isLoading,
}: Readonly<DestinationProps>) {
  return (
    <ArticleContainer
      href={isLoading ? undefined : `/destinations/${id.toString()}`}
    >
      <img
        className={`mx-auto w-auto h-48 mb-4 object-cover rounded-lg ${imageUrl ? "" : "opacity-30 animate-pulse"}`}
        src={`/Images/${imageUrl ?? "dummy.jpeg"}`}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = "/Images/dummy.jpeg";
        }}
      />
      <h2 className="text-xl font-semibold text-center">
        {name}
        {country ? `, ${country}` : ""}
      </h2>
      <p className="text-xs text-center p-2">{description}</p>
      <p className="text-md text-center font-bold">
        Best time to visit: {bestTimeToVisit}
      </p>
      <p className="text-md text-center">Number of visits: {visits.length}</p>
    </ArticleContainer>
  );
}

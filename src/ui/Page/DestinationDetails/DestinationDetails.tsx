import type { DetailedDestination } from "../../../types/destination";
import ArticleContainer from "../../ArticleContainer/ArticleContainer";

type DestinationDetailsProps = {
  Details: DetailedDestination;
};

export default function DestinationDetails({
  Details,
}: Readonly<DestinationDetailsProps>) {
  return (
    <ArticleContainer>
      <h1>{Details.name}</h1>
      <p>{Details.description}</p>
      <h2>
        Country: {Details.country} ({Details.countryCode})
      </h2>
      <h3>Visits:</h3>
      <ul>
        {Details.visits.map((visitDate) => (
          <li key={visitDate}>{visitDate}</li>
        ))}
      </ul>
      <h3>Attractions:</h3>
      {Details.attractions && Details.attractions.length > 0 && (
        <ul>
          {Details.attractions.map((attraction) => (
            <li key={attraction.id}>
              <strong>{attraction.name}</strong>: {attraction.description} -{" "}
              {attraction.location}
            </li>
          ))}
        </ul>
      )}
    </ArticleContainer>
  );
}

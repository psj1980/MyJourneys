import type { DetailedDestination } from "../../../types/destination";

type DestinationDetailsProps = {
  Details: DetailedDestination;
};

export default function DestinationDetails({
  Details,
}: Readonly<DestinationDetailsProps>) {
  return <div>Destination Details Page for {Details.name}</div>;
}

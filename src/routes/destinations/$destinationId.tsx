import { createFileRoute, useParams } from "@tanstack/react-router";
import { useSuspenseFetch } from "../../hooks/useFetchHook";
import { DetailedDestinationSchema } from "../../types/destination";
import DestinationDetails from "../../ui/Page/DestinationDetails/DestinationDetails";

export const Route = createFileRoute("/destinations/$destinationId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { destinationId } = useParams({ from: "/destinations/$destinationId" });
  const destinationDetailsPath = `destinationDetails/${destinationId}`;
  const { data: detailedDestination } = useSuspenseFetch<
    typeof DetailedDestinationSchema
  >(
    [destinationDetailsPath],
    destinationDetailsPath,
    DetailedDestinationSchema
  );

  return <DestinationDetails Details={detailedDestination} />;
}

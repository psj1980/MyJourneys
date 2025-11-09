import { createFileRoute, useParams } from "@tanstack/react-router";
import { useSuspenseFetch } from "../../hooks/useFetchHook";
import { DetailedDestinationSchema } from "../../types/destination";

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

  console.log(detailedDestination);

  return <div>{`Hello "/destinations/${destinationId}"!`}</div>;
}

import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/$destinationId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { destinationId } = useParams({ from: "/destinations/$destinationId" });

  return <div>{`Hello "/destinations/${destinationId}"!`}</div>;
}

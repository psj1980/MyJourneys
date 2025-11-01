import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/$destinationId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>{`Hello "/destinations/${2}"!`}</div>;
}

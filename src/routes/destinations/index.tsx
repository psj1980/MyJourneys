import { createFileRoute } from "@tanstack/react-router";
import DestinationList from "../../ui/Destination/DestinationList";
import Destination from "../../ui/Destination/Destination";
import {
  DestinationSchema,
  type Destination as DestinationType,
} from "../../types/destination";
import { environment } from "../../utils/environment";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import DummyDestination from "../../ui/Destination/DummyDestination";
import Button from "../../ui/Button/Button";

export const Route = createFileRoute("/destinations/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Button variant="secondary">Explore Now</Button>
      <Suspense
        fallback={
          <DestinationList>
            {Array.from({ length: 5 }).map(() => {
              const uniqueKey = crypto.randomUUID();
              return <DummyDestination key={uniqueKey} />;
            })}
          </DestinationList>
        }
      >
        <AllDestinations />
      </Suspense>
    </>
  );
}

function AllDestinations() {
  const { data: destinations } = useSuspenseQuery<DestinationType[]>({
    queryKey: ["destinations"],
    queryFn: async () => {
      const response = await fetch(`${environment.apiUrl}/destinations`);
      const json = await response.json();

      return DestinationSchema.array().parse(json);
    },
  });

  return (
    <DestinationList>
      {[...destinations]
        .sort((a: DestinationType, b: DestinationType) =>
          a.visits[0].localeCompare(b.visits[0])
        )
        .map((destination: DestinationType) => (
          <Destination key={destination.id} {...destination} />
        ))}
    </DestinationList>
  );
}

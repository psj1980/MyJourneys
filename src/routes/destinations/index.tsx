import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import {
  DestinationSchema,
  type Destination as DestinationType,
} from "../../types/destination";
import Button from "../../ui/Button/Button";
import DestinationList from "../../ui/DestinationList/DestinationList";
import DestinationListItem from "../../ui/DestinationList/Item/DestinationListItem";
import DestinationListDummyItem from "../../ui/DestinationList/ItemDummy/DestinationListDummyItem";
import { environment } from "../../utils/environment";

export const Route = createFileRoute("/destinations/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Button variant="primary">Explore Now</Button>
      <Suspense
        fallback={
          <DestinationList>
            {Array.from({ length: 5 }).map(() => {
              const uniqueKey = crypto.randomUUID();
              return <DestinationListDummyItem key={uniqueKey} />;
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
          <DestinationListItem key={destination.id} {...destination} />
        ))}
    </DestinationList>
  );
}

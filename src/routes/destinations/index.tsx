import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { useSuspenseFetch } from "../../hooks/useFetchHook";
import {
  DestinationsSchema,
  type Destination as DestinationType,
} from "../../types/destination";
import DestinationList from "../../ui/DestinationList/DestinationList";
import DestinationListItem from "../../ui/DestinationList/Item/DestinationListItem";
import DestinationListDummyItem from "../../ui/DestinationList/ItemDummy/DestinationListDummyItem";

export const Route = createFileRoute("/destinations/")({
  component: Index,
});

function Index() {
  return (
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
  );
}

function AllDestinations() {
  const path = "destinations";
  const { data: destinations2 } = useSuspenseFetch<typeof DestinationsSchema>(
    [path],
    path,
    DestinationsSchema
  );

  return (
    <DestinationList>
      {[...destinations2]
        .sort((a: DestinationType, b: DestinationType) =>
          a.visits[0].localeCompare(b.visits[0])
        )
        .map((destination: DestinationType) => (
          <DestinationListItem
            isLoading={false}
            key={destination.id}
            {...destination}
          />
        ))}
    </DestinationList>
  );
}

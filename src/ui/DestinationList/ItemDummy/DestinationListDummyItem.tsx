import DestinationListItem from "../Item/DestinationListItem";

/**
 * @remarks
 * - Dummy destination component for loading states.
 *
 * @returns React component with dummy destination
 */
export default function DestinationListDummyItem() {
  return (
    <DestinationListItem
      id={0}
      name="Loading..."
      country=""
      countryCode=""
      description="Loading..."
      bestTimeToVisit="Loading..."
      visits={[]}
      isLoading
    />
  );
}

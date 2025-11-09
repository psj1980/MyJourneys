import type { Meta, StoryObj } from "@storybook/react-vite";
import QueryClientAndRouteProviderForStorybook from "../../utils/test/QueryClientAndRouteProviderForStorybook";
import DestinationList from "./DestinationList";
import DestinationListItem from "./Item/DestinationListItem";
import DestinationListDummyItem from "./ItemDummy/DestinationListDummyItem";

const meta: Meta<typeof DestinationList> = {
  title: "UI/Components/DestinationList",
  component: DestinationList,
};

export default meta;

type Story = StoryObj<typeof DestinationList>;

const Destinations = (
  <>
    <DestinationListItem
      key={1}
      id={1}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
      isLoading={false}
    />
    <DestinationListItem
      key={2}
      id={2}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
      isLoading={false}
    />
    <DestinationListItem
      key={3}
      id={3}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
      isLoading={false}
    />
    <DestinationListItem
      key={4}
      id={4}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
      isLoading={false}
    />
  </>
);

export const Default: Story = {
  render: () => (
    <QueryClientAndRouteProviderForStorybook
      component={<DestinationList>{Destinations}</DestinationList>}
    />
  ),
};

const Dummies = Array.from({ length: 5 }).map(() => {
  const uniqueKey = crypto.randomUUID();
  return <DestinationListDummyItem key={uniqueKey} />;
});

export const DummyDestinations: Story = {
  args: {
    children: Dummies,
  },
};

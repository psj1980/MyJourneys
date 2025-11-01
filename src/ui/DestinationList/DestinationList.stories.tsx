import type { Meta, StoryObj } from "@storybook/react-vite";
import DestinationList from "./DestinationList";
import DestinationListItem from "./Item/DestinationListItem";
import DestinationListDummyItem from "./ItemDummy/DestinationListDummyItem";

const meta: Meta<typeof DestinationList> = {
  title: "UI/Components/DestinationList",
  component: DestinationList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DestinationList>;

const Destinations = (
  <>
    <DestinationListItem
      id={1}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
    />
    <DestinationListItem
      id={1}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
    />
    <DestinationListItem
      id={1}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
    />
    <DestinationListItem
      id={1}
      name="Paris"
      country="France"
      countryCode={"FR"}
      imageUrl="paris.jpeg"
      bestTimeToVisit="April to June and October to early November"
      visits={["2022-05-15", "2023-09-10"]}
    />
  </>
);

export const Default: Story = {
  args: {
    children: Destinations,
  },
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import QueryClientAndRouteProviderForStorybook from "../../../utils/test/QueryClientAndRouteProviderForStorybook";
import DestinationListItem, {
  type DestinationProps,
} from "./DestinationListItem";

const meta: Meta<typeof DestinationListItem> = {
  title: "UI/Components/DestinationList/Item",
  component: DestinationListItem,
};

export default meta;

type Story = StoryObj<typeof DestinationListItem>;

const exampleProps: DestinationProps = {
  id: 1,
  name: "Paris",
  country: "France",
  description:
    "The city of lights, known for its art, culture, and iconic landmarks.",
  imageUrl: "paris.jpeg",
  bestTimeToVisit: "April to June and October to early November",
  visits: ["2022-05-15", "2023-09-10"],
  countryCode: "FR",
  isLoading: false,
};

export const Default: Story = {
  render: () => (
    <QueryClientAndRouteProviderForStorybook
      component={<DestinationListItem {...exampleProps} />}
    />
  ),
};

export const WithLongDescription: Story = {
  render: () => (
    <QueryClientAndRouteProviderForStorybook
      component={
        <DestinationListItem
          {...exampleProps}
          description={
            "Paris is the capital city of France, known for its art, gastronomy, and culture. The city is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
          }
        />
      }
    />
  ),
};

export const WithDummyImage: Story = {
  args: {
    ...exampleProps,
    imageUrl: "undefined",
    isLoading: true,
  },
};

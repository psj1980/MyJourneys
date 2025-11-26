import type { Meta, StoryObj } from "@storybook/react-vite";
import DestinationDetailsContainer from "./Container";
import DestinationImage from "./Image";
import DestinationContent from "./Content";
import DestinationDetails from "./Details";
import DestinationFooter from "./ContentFooter";

const meta: Meta<typeof DestinationDetailsContainer> = {
  title: "UI/Components/Destination/Details",
  component: DestinationDetailsContainer,
  argTypes: {
    variant: {
      description: "Details variant",
      control: { type: "radio" },
      options: ["primary", "horizontal", "compact"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DestinationDetailsContainer>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: (
      <>
        <DestinationImage
          variant="primary"
          image={{
            url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
            description: "Maldives Beach Resort",
          }}
        />
        <DestinationContent variant="primary">
          <DestinationDetails
            variant="primary"
            title="Maldiverne"
            subtitle="Indian Ocean"
            description="Crystal clear waters, overwater bungalows, and pristine white sand beaches. The perfect tropical paradise for your dream vacation."
          />
          <DestinationFooter price={2500} variant="primary" />
        </DestinationContent>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    children: (
      <>
        <DestinationImage
          variant="horizontal"
          image={{
            url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
            description: "Maldives Beach Resort",
          }}
        />
        <DestinationContent variant="horizontal">
          <DestinationDetails
            variant="horizontal"
            title="Maldiverne"
            subtitle="Indian Ocean"
            description="Crystal clear waters, overwater bungalows, and pristine white sand beaches. The perfect tropical paradise for your dream vacation."
          />
          <DestinationFooter price={2500} variant="horizontal" />
        </DestinationContent>
      </>
    ),
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    children: (
      <>
        <DestinationImage
          variant="compact"
          image={{
            url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
            description: "Maldives Beach Resort",
          }}
        />
        <DestinationContent variant="compact">
          <DestinationDetails
            variant="compact"
            title="Maldiverne"
            subtitle="Indian Ocean"
            description="Crystal clear waters, overwater bungalows, and pristine white sand beaches. The perfect tropical paradise for your dream vacation."
          />
          <DestinationFooter price={2500} variant="compact" />
        </DestinationContent>
      </>
    ),
  },
};

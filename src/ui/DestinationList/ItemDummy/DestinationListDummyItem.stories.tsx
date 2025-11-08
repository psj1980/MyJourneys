import type { Meta, StoryObj } from "@storybook/react-vite";
import DestinationListDummyItem from "./DestinationListDummyItem";

const meta: Meta<typeof DestinationListDummyItem> = {
  title: "UI/Components/DestinationList/DummyItem",
  component: DestinationListDummyItem,
};

export default meta;

type Story = StoryObj<typeof DestinationListDummyItem>;

export const Default: Story = {};

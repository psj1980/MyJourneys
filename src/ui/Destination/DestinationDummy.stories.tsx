import type { Meta, StoryObj } from "@storybook/react-vite";
import DummyDestination from "./DummyDestination";

const meta: Meta<typeof DummyDestination> = {
  title: "UI/Components/DestinationDummy",
  component: DummyDestination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DummyDestination>;

export const Default: Story = {};

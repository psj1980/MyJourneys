import type { Meta, StoryObj } from "@storybook/react";
import ErrorDisplay from "./ErrorDisplay";

const meta: Meta<typeof ErrorDisplay> = {
  title: "UI/Components/ErrorDisplay",
  component: ErrorDisplay,
};

export default meta;

type Story = StoryObj<typeof ErrorDisplay>;

export const Default: Story = {
  args: {
    error: "An unexpected error occurred.",
  },
};

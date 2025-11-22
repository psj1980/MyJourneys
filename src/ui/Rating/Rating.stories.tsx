import type { Meta, StoryObj } from "@storybook/react-vite";
import Rating from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "UI/Components/Rating",
  component: Rating,
  argTypes: {
    rating: {
      description: "Rating value (0 to 5)",
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
    size: {
      description: "Size of the rating component",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    variant: {
      description: "Variant style of the rating component",
      control: { type: "radio" },
      options: ["primary", "secondary", "outline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "UI/Components/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const DefaultExample: Story = {
  args: {
    children: "This is a label",
  },
};

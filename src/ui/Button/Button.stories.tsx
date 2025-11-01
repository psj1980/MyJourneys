import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import { IconArrowLeft } from "@tabler/icons-react";

const meta = {
  title: "UI/Components/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "radio" },
      options: ["primary", "secondary", "outline"],
    },
    size: {
      description: "Button size",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
    },
    isPending: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isDisabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <IconArrowLeft />
        Button
      </>
    ),
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

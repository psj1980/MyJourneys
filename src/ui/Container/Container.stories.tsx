import type { Meta, StoryObj } from "@storybook/react-vite";
import Container from "../Container/Container";

const meta: Meta<typeof Container> = {
  title: "UI/Components/Container",
  component: Container,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "radio" },
      options: ["primary", "horizontal", "compact"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    // children: (
    //   <article>
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam minima,
    //     excepturi similique nam tenetur voluptatibus qui deleniti vero saepe
    //     dolor quasi nisi sed aliquam! Natus, magnam? Iure, vel amet! Neque.
    //   </article>
    // ),
  },
};

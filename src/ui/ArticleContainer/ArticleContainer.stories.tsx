import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

const meta: Meta<typeof ArticleContainer> = {
  title: "UI/Components/ArticleContainer",
  component: ArticleContainer,
};

export default meta;

type Story = StoryObj<typeof ArticleContainer>;

export const Default: Story = {
  args: {
    children: (
      <article>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam minima,
        excepturi similique nam tenetur voluptatibus qui deleniti vero saepe
        dolor quasi nisi sed aliquam! Natus, magnam? Iure, vel amet! Neque.
      </article>
    ),
  },
};

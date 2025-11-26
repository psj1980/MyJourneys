import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  IconMoodAngry,
  IconMoodAngryFilled,
  IconMoodAnnoyed2,
  IconMoodHappy,
  IconMoodSad,
  IconUmbrella,
  IconWalk,
} from "@tabler/icons-react";
import Tag from "./Tag";
import TagGroup from "./TagGroup";

const meta: Meta<typeof TagGroup> = {
  title: "UI/Components/Tag",
  component: TagGroup,
  argTypes: {
    alignment: {
      description: "Button variant",
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

export const DefaultExample: Story = {
  render: (args) => (
    <div className="w-[80vw] mx-auto">
      <TagGroup
        label="Hejsa"
        {...args}
        aria-label="Group of tags Default example"
      >
        <Tag variant="primary" textValue="Beach">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="primary" textValue="Hiking">
          <IconWalk className="w-3 h-3 mr-1" />
          Hiking
        </Tag>
        <Tag variant="primary" textValue="City">
          <IconMoodAngry className="w-3 h-3 mr-1" />
          City
        </Tag>
        <Tag variant="primary" textValue="Crowded">
          <IconMoodSad className="w-3 h-3 mr-1" />
          Crowded
        </Tag>
        <Tag variant="primary" textValue="Rainy">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
      </TagGroup>
    </div>
  ),
};

export const TagGroupAllTagsSmallExample: Story = {
  render: (args) => (
    <div className="w-[80vw] mx-auto">
      <TagGroup {...args} aria-label="Group of tags Small example">
        <Tag variant="primary" size="small" textValue="Beach">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="secondary" size="small" textValue="Rainy">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
        <Tag variant="success" size="small" textValue="Success">
          <IconMoodHappy className="w-3 h-3 mr-1" />
          Success
        </Tag>
        <Tag variant="warning" size="small" textValue="Warning">
          <IconMoodAnnoyed2 className="w-3 h-3 mr-1" />
          Warning
        </Tag>
        <Tag variant="danger" size="small" textValue="Danger">
          <IconMoodAngryFilled className="w-3 h-3 mr-1" />
          Danger
        </Tag>
      </TagGroup>
    </div>
  ),
};

export const TagGroupAllTagsMediumExample: Story = {
  render: (args) => (
    <div className="w-[80vw] mx-auto">
      <TagGroup {...args} aria-label="Group of tags Medium example">
        <Tag variant="primary" size="medium" textValue="Beach">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="secondary" size="medium" textValue="Rainy">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
        <Tag variant="success" size="medium" textValue="Success">
          <IconMoodHappy className="w-3 h-3 mr-1" />
          Success
        </Tag>
        <Tag variant="warning" size="medium" textValue="Warning">
          <IconMoodAnnoyed2 className="w-3 h-3 mr-1" />
          Warning
        </Tag>
        <Tag variant="danger" size="medium" textValue="Danger">
          <IconMoodAngryFilled className="w-3 h-3 mr-1" />
          Danger
        </Tag>
      </TagGroup>
    </div>
  ),
};

export const TagGroupAllTagsLargeExample: Story = {
  render: (args) => (
    <div className="w-[80vw] mx-auto">
      <TagGroup {...args} aria-label="Group of tags Large example">
        <Tag variant="primary" size="large" textValue="Beach">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="secondary" size="large" textValue="Rainy">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
        <Tag variant="success" size="large" textValue="Success">
          <IconMoodHappy className="w-3 h-3 mr-1" />
          Success
        </Tag>
        <Tag variant="warning" size="large" textValue="Warning">
          <IconMoodAnnoyed2 className="w-3 h-3 mr-1" />
          Warning
        </Tag>
        <Tag variant="danger" size="large" textValue="Danger">
          <IconMoodAngryFilled className="w-3 h-3 mr-1" />
          Danger
        </Tag>
      </TagGroup>
    </div>
  ),
};

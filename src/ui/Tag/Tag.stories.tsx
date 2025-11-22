import type { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "./Tag";
import {
  IconMoodAngry,
  IconMoodSad,
  IconUmbrella,
  IconWalk,
} from "@tabler/icons-react";
import TagGroup from "./TagGroup";

const meta: Meta<typeof Tag> = {
  title: "UI/Components/Tag",
  component: Tag,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "radio" },
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: (
      <>
        <IconUmbrella className="w-3 h-3" />
        Beach
      </>
    ),
  },
};

export const TagGroupExample: Story = {
  render: () => (
    <TagGroup alignment="left">
      <Tag variant="primary">
        <IconUmbrella className="w-3 h-3 mr-1" />
        Beach
      </Tag>
      <Tag variant="success">
        <IconWalk className="w-3 h-3 mr-1" />
        Hiking
      </Tag>
      <Tag variant="warning">
        <IconMoodAngry className="w-3 h-3 mr-1" />
        City
      </Tag>
      <Tag variant="danger">
        <IconMoodSad className="w-3 h-3 mr-1" />
        Crowded
      </Tag>
      <Tag variant="secondary">
        <IconUmbrella className="w-3 h-3 mr-1" />
        Rainy
      </Tag>
    </TagGroup>
  ),
};

export const TagGroupCenterExample: Story = {
  render: () => (
    <div className="w-200 mx-auto">
      <TagGroup alignment="center">
        <Tag variant="primary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="success">
          <IconWalk className="w-3 h-3 mr-1" />
          Hiking
        </Tag>
        <Tag variant="warning">
          <IconMoodAngry className="w-3 h-3 mr-1" />
          City
        </Tag>
        <Tag variant="danger">
          <IconMoodSad className="w-3 h-3 mr-1" />
          Crowded
        </Tag>
        <Tag variant="secondary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
      </TagGroup>
    </div>
  ),
};

export const TagGroupLeftExample: Story = {
  render: () => (
    <div className="w-200 mx-auto">
      <TagGroup alignment="left">
        <Tag variant="primary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="success">
          <IconWalk className="w-3 h-3 mr-1" />
          Hiking
        </Tag>
        <Tag variant="warning">
          <IconMoodAngry className="w-3 h-3 mr-1" />
          City
        </Tag>
        <Tag variant="danger">
          <IconMoodSad className="w-3 h-3 mr-1" />
          Crowded
        </Tag>
        <Tag variant="secondary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
      </TagGroup>
    </div>
  ),
};

export const TagGroupRightExample: Story = {
  render: () => (
    <div className="w-200 mx-auto">
      <TagGroup alignment="right">
        <Tag variant="primary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Beach
        </Tag>
        <Tag variant="success">
          <IconWalk className="w-3 h-3 mr-1" />
          Hiking
        </Tag>
        <Tag variant="warning">
          <IconMoodAngry className="w-3 h-3 mr-1" />
          City
        </Tag>
        <Tag variant="danger">
          <IconMoodSad className="w-3 h-3 mr-1" />
          Crowded
        </Tag>
        <Tag variant="secondary">
          <IconUmbrella className="w-3 h-3 mr-1" />
          Rainy
        </Tag>
      </TagGroup>
    </div>
  ),
};

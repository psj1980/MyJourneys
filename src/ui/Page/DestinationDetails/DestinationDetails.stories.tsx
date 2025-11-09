import type { Meta, StoryObj } from "@storybook/react";
import DestinationDetails from "./DestinationDetails";

/**
 * Storybook configuration for DestinationDetails component
 *
 * @remarks Displays details for a travel destination.
 */
const meta: Meta<typeof DestinationDetails> = {
  title: "Page/DestinationDetails",
  component: DestinationDetails,
};

export default meta;

type Story = StoryObj<typeof DestinationDetails>;

/**
 * Default story for DestinationDetails
 */
export const Default: Story = {
  args: {
    Details: {
      id: 1,
      name: "Paris",
      description: "The city of lights and love.",
      country: "France",
      countryCode: "FR",
      visits: ["2022-05-01", "2023-04-15"],
      attractions: [
        {
          id: 1,
          name: "Eiffel Tower",
          description: "Iconic landmark of Paris.",
          location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
        },
        {
          id: 2,
          name: "Louvre Museum",
          description: "World's largest art museum.",
          location: "Rue de Rivoli, 75001 Paris",
        },
      ],
    },
  },
};

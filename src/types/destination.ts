import z from "zod";
import { CuisineSchema } from "./cuisine";
import { ImageSchema } from "./image";
import { CulturalTipSchema } from "./culturalTip";
import { AttractionSchema } from "./attraction";

export const DestinationSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  countryCode: z.string().length(2, "Country code must be 2 characters"),
  attractions: z.array(z.string()).optional(),
  bestTimeToVisit: z.string().optional(),
  visits: z.array(
    z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
  ),
  imageUrl: z.string().optional(),
});

export type Destination = z.infer<typeof DestinationSchema>;

export const DestinationsSchema = DestinationSchema.array();

export const DetailedDestinationSchema = DestinationSchema.extend({
  localCuisine: z.array(CuisineSchema).optional(),
  travelTips: z.string().optional(),
  gallery: z.array(ImageSchema).optional(),
  attractions: z.array(AttractionSchema).optional(),
  culturalTips: z.array(CulturalTipSchema).optional(),
});

export type DetailedDestination = z.infer<typeof DetailedDestinationSchema>;

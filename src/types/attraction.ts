import z from "zod";
import { ImageSchema } from "./image";

export const AttractionSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  entryFee: z.number().min(0, "Entry fee cannot be negative").optional(),
  openingHours: z.string().optional(),
  image: ImageSchema.optional(),
});

export type Attraction = z.infer<typeof AttractionSchema>;

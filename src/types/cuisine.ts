import z from "zod";
import { ImageSchema } from "./image";

export const CuisineSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  description: z.string(),
  image: ImageSchema,
  spiceLevel: z
    .enum(["Mild", "Medium", "Hot", "Very Hot"])
    .default("Mild")
    .optional(),
  bestPlacesToTry: z.array(z.string()).optional(),
});

export type Cuisine = z.infer<typeof CuisineSchema>;

import z from "zod";

export const ImageSchema = z.object({
  url: z.string().default("dummy.jpeg"),
  description: z.string().optional(),
  photographer: z.string().default("Pia Søvsø Jensen"),
});

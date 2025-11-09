import z from "zod";

export const CulturalTipSchema = z.object({
  id: z.number(),
  tip: z.string().min(1, "Cultural tip is required"),
});

export type CulturalTip = z.infer<typeof CulturalTipSchema>;

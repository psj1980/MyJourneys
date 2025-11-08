import z from "zod";

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
  imageUrl: z.string("Invalid URL").optional(),
});

export type Destination = z.infer<typeof DestinationSchema>;

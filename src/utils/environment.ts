import z from "zod";

export const environmentSchema = z.object({
  VITE_API_URL: z.url(),
});

const parsedEnvironment = environmentSchema.parse(import.meta.env);

export type Environment = z.infer<typeof environmentSchema>;

/** Environment variables */
export const environment = {
  apiUrl: parsedEnvironment.VITE_API_URL,
};

import { useSuspenseQuery } from "@tanstack/react-query";
import { environment } from "../utils/environment";
import { z } from "zod";

/**
 * Generic hook for fetching data with schema validation.
 *
 * @param key - Unique query key for react-query caching
 *
 * @param path - API path to fetch
 *
 * @param schema - Zod schema for validation
 *
 * @returns Suspense-enabled query result
 */
export function useSuspenseFetch<U extends z.ZodTypeAny>(
  key: unknown[],
  path: string,
  schema: U
) {
  return useSuspenseQuery<z.infer<U>>({
    queryKey: key,
    queryFn: async () => {
      const response = await fetch(`${environment.apiUrl}/${path}`);

      if (response.status === 404) {
        throw new Error("Not found");
      }

      if (!response.ok) {
        throw new Error("Failed");
      }
      const json = await response.json();

      return schema.parse(json);
    },
  });
}

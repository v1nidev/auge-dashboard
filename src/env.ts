/* eslint no-restricted-properties: 0 */

import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_NUMBER: z.coerce.number(),
  VITE_BOOLEAN: z.union([z.literal('TRUE'), z.literal('FALSE')])
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  throw {
    error: new Error("There is an error with the environment variables"),
    cause: parsedEnv.error.issues
  }
}

export type Env = z.infer<typeof envSchema> & ImportMetaEnv;
export const env: Env = {
  ...import.meta.env,
  ...parsedEnv.data
} as const;

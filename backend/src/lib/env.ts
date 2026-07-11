import { z } from "zod";

const EnvSchema = z.object({

    DATABASE_URL: z.string().url(),

    JWT_SECRET: z.string().min(32),

    NODE_ENV: z.enum([
        "development",
        "production",
        "test"
    ]).default("development"),

    PORT: z.coerce.number().default(3000)

});

export const env = EnvSchema.parse(process.env);

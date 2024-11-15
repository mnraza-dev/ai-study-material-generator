
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    dialect: 'postgresql',
    schema: './configs/schema.js',

    dbCredentials: {
        url: 'postgresql://neondb_owner:NGfJR4p7jlLk@ep-quiet-band-a5mup9bu.us-east-2.aws.neon.tech/AI-Study-Material-Gen?sslmode=require',
    },
});

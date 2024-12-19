import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.AUTH_DATABASE_HOST,
  database: process.env.AUTH_DATABASE_NAME,
  user: process.env.AUTH_DATABASE_USER,
  password: process.env.AUTH_DATABASE_PASSWORD,
  port: 5432,
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
import dotenv from 'dotenv';
dotenv.config();
export const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT || 5432,
};
export const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT || 5432,
};
export const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT || 5432,
};

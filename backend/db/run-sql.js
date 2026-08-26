require("dotenv").config();

const fs = require("fs");
const { Client } = require("pg");

async function run() {
  const sqlFile = process.argv[2];

  if (!sqlFile) {
    throw new Error("SQL file path is required.");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined.");
  }

  const sql = fs.readFileSync(sqlFile, "utf8");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    console.log(`Connected to database.`);

    await client.query(sql);

    console.log(`Successfully executed ${sqlFile}`);
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

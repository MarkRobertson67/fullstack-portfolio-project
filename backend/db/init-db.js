
const db = require("./dbConfig"); // Import the database configuration
const fs = require("fs");
const path = require("path");

async function initializeDatabase() {
  try {
    // Read and execute SQL schema file (create tables)
    const schemaSQL = fs.readFileSync(
      path.join(__dirname, "", "schema.sql"),
      "utf8"
    );
    await db.none(schemaSQL);

    // Read and execute SQL seed file (populate tables with initial data)
    const seedSQL = fs.readFileSync(
      path.join(__dirname, "", "seed.sql"),
      "utf8"
    );
    await db.none(seedSQL);

    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Error initializing the database:", error);
  } finally {
    // Disconnect from the database
    db.$pool.end();
  }
}

initializeDatabase();

// Run with $ node db/init-db.js  
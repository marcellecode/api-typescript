import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const SQL_ITENS_CREATE = `
    CREATE TABLE itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to SQLite database");
    database.run(SQL_ITENS_CREATE, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Created itens table");
      }
    });
  }
});

export default database;
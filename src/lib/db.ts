import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

const path = resolve(
  import.meta.env.SQLITE_DB_PATH || "./data/scolarite.sqlite"
);
mkdirSync(dirname(path), { recursive: true });
const db = new DatabaseSync(path);

db.exec("PRAGMA foreign_keys = ON;");
db.exec("PRAGMA journal_mode = WAL;");
export default db;

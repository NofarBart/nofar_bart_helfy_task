const fs = require("fs");

const DB_FILE = "./db.json";
function readDB() {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
}

// go over it
function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

module.exports = {readDB, writeDB};
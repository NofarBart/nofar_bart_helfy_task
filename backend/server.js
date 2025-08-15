const express = require("express");
const cors = require("cors");

const tasksRouter = require("./routes/tasks");

// create express application instance- app. The server
const app = express();

// CORS middleware, backend can talk with frontend with no block
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000


app.use("/api/tasks", tasksRouter)


app.listen(PORT, ()=> {
    console.log(`listenning to port ${PORT}`)
})
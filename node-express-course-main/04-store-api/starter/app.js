express = require("express");
require("dotenv").config();
app = express();

notfound = require("./middleware/not-found");
const connectDB = require("./db/connect");
const route = require("./routes/products");
errorhandler = require("./middleware/error-handler");

app.use(express.json());

app.use("/api/v1/products", route);

app.use(notfound);
app.use(errorhandler);

const start = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (error) {
    console.log(error, "error form server listening");
  }
};
start();

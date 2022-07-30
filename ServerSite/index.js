const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:ashik@cluster0.xlo32.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    console.log("connected database");
    const collection = client.db("CleanCo").collection("Services");

    app.get("/", async (req, res) => {
        const cursor=collection.find({})
        const result = await cursor.toArray();
        res.send(result);
      });

  } finally {

  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

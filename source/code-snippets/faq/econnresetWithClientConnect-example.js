const uri = "mongodb://localhost:27017/test?maxPoolSize=5000";
// create a new MongoClient
const client = new MongoClient(uri, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

await client.connect(err => {
  // connection
});

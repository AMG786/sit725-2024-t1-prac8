const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abdulmueezgujjar:rRZhAiAniyrfiTgm@cluster0.6v54j4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

module.exports = client;
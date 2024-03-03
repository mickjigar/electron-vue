// mongoConnection.js
const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('pravachanDB'); // Replace 'yourDatabaseName' with your actual database name
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = connectToMongoDB;

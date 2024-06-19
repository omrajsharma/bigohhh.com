import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Creating an instance of Express
const app = express();

// Use body parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
console.log(process.env.PORT);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

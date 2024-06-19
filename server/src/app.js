import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database.js';

import subscriberRoutes from './routes/subscriberRoutes.js';

// Load environment variables from .env file
dotenv.config();
connectDB();

// Creating an instance of Express
const app = express();

// Use body parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

/**
 * ROUTES
 */
app.use('/api', subscriberRoutes);

// Define a route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Export the app for server and testing purposes
export default app;
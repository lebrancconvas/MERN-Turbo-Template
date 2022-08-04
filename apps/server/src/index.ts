import express from 'express';
import cors from 'cors';
import router from './routes/router';
import mongoose from 'mongoose';
import { config } from './config/config';

const app = express();
const PORT = process.env.PORT || 3802;

app.use(cors());
app.use(express.json());

// Using API Router. 
app.use(router);

// Connect MongoDB 
mongoose
	.connect(config.mongo.url)
	.then(() => {
		console.log('[SUCCESS] Connected to MongoDB.'); 
	})
	.catch(err => {
		console.error(err);
		console.log('[FAILURE] Can\'t connected to MongoDB.')
	})

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] Server is running on port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[FAILURE] Server is not running on port ${PORT}`);
	}
});
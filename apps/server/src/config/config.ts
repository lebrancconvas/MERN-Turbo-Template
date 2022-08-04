import dotenv from 'dotenv';

// Use Config Data from .env file
dotenv.config();

// Setup Mongo Username, Password, and URL. 
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mern-turbo-starter-clus.zjkp4my.mongodb.net/?retryWrites=true&w=majority`;

// Setup Server Port. 
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

// Config. 
export const config = {
	mongo: {
		url: MONGO_URL
	},
	server: {
		port: SERVER_PORT
	}
};
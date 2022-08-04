import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();
const PORT = process.env.PORT || 3802;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] Server is running on port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[FAILURE] Server is not running on port ${PORT}`);
	}
});
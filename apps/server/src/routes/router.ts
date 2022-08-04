import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('MERN Turbo Server Start.'); 
});

export default router;
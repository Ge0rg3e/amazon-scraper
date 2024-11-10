import search from '~/scraper/search';
import express from 'express';

const router = express.Router();

// Route to handle search products requests
router.get('/:query', async (req, res) => {
	const query = req.params.query;

	try {
		const products = await search(query);
		res.status(200).json(products);
	} catch (error) {
		// Handle errors with a custom message
		console.error('[Amazon-Scraper] Error search products:', error);
		res.status(500).json({ message: 'Failed to search products' });
	}
});

export default router;

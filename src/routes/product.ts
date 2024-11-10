import { getProduct } from '~/scraper';
import express from 'express';

const router = express.Router();

// Route to handle product requests
router.get('/:id', async (req, res) => {
	const productID = req.params.id;

	try {
		const product = await getProduct(productID);
		res.status(200).json(product);
	} catch (error) {
		// Handle errors with a custom message
		console.error('[Amazon-Scraper] Error fetching product:', error);
		res.status(500).json({ message: 'Failed to get product' });
	}
});

export default router;

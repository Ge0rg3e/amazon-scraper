import productRouter from './routes/product';
import searchRouter from './routes/search';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Routes
app.use('/product', productRouter);
app.use('/search', searchRouter);

app.listen(45600, () => {
	console.info('[Amazon-Scraper] App started on port 45600');
});

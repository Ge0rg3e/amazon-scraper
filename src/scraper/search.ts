import puppeteer from 'puppeteer';

const search = async (query: string) => {
	const browser = await puppeteer.launch({
		headless: true, // Run in headless mode for performance
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();

	// Set a larger viewport to avoid small resolution issues
	await page.setViewport({ width: 1270, height: 720 });

	await page.goto(`https://amazon.de/s?k=${encodeURIComponent(query)}`, {
		waitUntil: 'domcontentloaded'
	});

	// Scrape search results
	const searchResults = await page.evaluate(() => {
		const results = [];
		const items = document.querySelectorAll('[data-component-type="s-search-result"]');

		items.forEach((item) => {
			const titleElement = item.querySelector('h2 > a > span');
			const imageElement = item.querySelector('img.s-image');
			const priceElement = item.querySelector('span.a-price > span.a-offscreen');
			const linkElement = item.querySelector('a');
			const title = titleElement?.textContent?.trim() || 'No title available';
			const image = imageElement?.getAttribute('src') || 'No image available';
			const price = priceElement?.textContent?.trim() || 'N/A';
			const link = `https://amazon.de${linkElement?.getAttribute('href')}`;
			const id = linkElement?.getAttribute('href').match(/\/dp\/([^/]+)/)[1];

			results.push({ id, title, image, price, link });
		});

		return results;
	});

	await browser.close();

	return searchResults;
};

export default search;

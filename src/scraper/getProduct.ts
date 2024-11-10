import puppeteer from 'puppeteer';

const getProduct = async (productID: string) => {
	const browser = await puppeteer.launch({
		headless: true, // Run in headless mode for performance
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();

	// Set a larger viewport to avoid small resolution issues
	await page.setViewport({ width: 1270, height: 720 });

	await page.goto(`https://amazon.de/dp/${productID}`, {
		waitUntil: 'domcontentloaded'
	});

	// Scrape product details (id, title, price, description, etc.)
	const productData = await page.evaluate((productID: string) => {
		const title = document.querySelector('#productTitle')?.textContent?.trim() || '';
		const mainImage = document.querySelector('#landingImage')?.getAttribute('src') || '';
		const price = document.querySelector('#corePrice_feature_div > div > div > span.a-price.aok-align-center > span.a-offscreen')?.textContent?.trim() || 'N/A';
		const description = document.querySelector('#productDescription')?.textContent?.trim() || 'N/A';

		// Scrape reviews
		const reviews = Array.from(document.querySelectorAll('[id^="customer_review-"]')).map((review) => {
			const profileName = review.querySelector('div.a-profile-content > span')?.textContent?.trim() || '';

			const content =
				review.querySelector('div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content > span.cr-original-review-content')?.textContent?.trim() || '';

			return {
				profileName,
				content
			};
		});

		return { id: productID, title, mainImage, price, description, reviews };
	}, productID);

	await browser.close();

	return productData;
};

export default getProduct;

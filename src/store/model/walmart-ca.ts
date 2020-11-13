import {Store} from './store';

export const WalmartCa: Store = {
	labels: {
		inStock: {
			container: 'button[data-automation="cta-button"]',
			text: ['Add to cart']
		},
		maxPrice: {
			container: 'span[data-automation="buybox-price"]'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.walmart.ca/en/ip/playstation-5-digital-edition/6000202198823'
		}
	],
	name: 'walmart-ca'
};

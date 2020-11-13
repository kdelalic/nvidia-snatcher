import {Store} from './store';

export const TheSource: Store = {
	labels: {
		inStock: {
			container: '.button .primary-button .full-button .addToCartButton',
			text: ['Add to Cart']
		},
		maxPrice: {
			container: '.pdp-sale-price'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.thesource.ca/en-ca/gaming/playstation/ps5/playstation%c2%ae5-digital-edition-console/p/108090498'
		}
	],
	name: 'thesource'
};

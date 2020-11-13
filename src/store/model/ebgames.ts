import {Store} from './store';

export const EBGames: Store = {
	labels: {
		inStock: {
			container: '.megaButton .cartAddRadio',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.prodPriceCont .valuteCont .pricetext',
			euroFormat: false
		},
		outOfStock: {
			container: '.megaButton .buyDisabled',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.ebgames.ca/PS5/Games/877523/playstation-5-digital-edition'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.ebgames.ca/PS5/Games/877523/playstation-5-digital-edition'
		}
	],
	name: 'ebgames',
	successStatusCodes: [[0, 399], 404]
};

import '@testing-library/jest-dom';
import { CardsCollection } from '../../src/components/CardsCollection';
import { render, screen } from '@testing-library/react';
import { celebsExample } from '../../src/fixtures/celebs-example';

describe('Tests on <CardCollections />', () => {
	test('should show correctly', async () => {
		const { container } = render(<CardsCollection cards={celebsExample} />);
		expect(container).toMatchSnapshot();
	});

	test('should have all items', async () => {
		render(<CardsCollection cards={celebsExample} />);
		expect((await screen.findByTestId('collection_container')).childElementCount).toBe(celebsExample.length);
	});
});

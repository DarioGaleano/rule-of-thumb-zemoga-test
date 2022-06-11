import '@testing-library/jest-dom';
import { CardsCollection } from '../../components/CardsCollection';
import { render, screen } from '@testing-library/react';
import { celebsExample } from '../../fixtures/celebs-example';

describe('Tests on <CardCollections />', () => {
	test('should show correctly', async () => {
		const wrapper = render(<CardsCollection cards={celebsExample} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should have all items', async () => {
		render(<CardsCollection cards={celebsExample} />);
		expect((await screen.findByTestId('collection_container')).childElementCount).toBe(celebsExample.length);
	});
});

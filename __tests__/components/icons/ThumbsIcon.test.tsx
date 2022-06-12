import '@testing-library/jest-dom';
import { ThumbsIcon } from '../../../src/components/icons/ThumbsIcon';
import { render, screen } from '@testing-library/react';

describe('Tests on <ThumbsIcon />', () => {
	test('should show the positive component correctly', async () => {
		const { container } = render(<ThumbsIcon withBg type='positive' />);
		expect(container).toMatchSnapshot();
		expect(screen.getByLabelText('thumbs up')).toBeTruthy();
	});

	test('should show the negative component correctly', () => {
		render(<ThumbsIcon withBg type='negative' />);
		expect(screen.getByLabelText('thumbs down')).toBeTruthy();
	});
});

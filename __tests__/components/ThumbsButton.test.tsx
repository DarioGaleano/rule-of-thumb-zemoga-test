import '@testing-library/jest-dom';
import { ThumbsButton } from '../../src/components/ThumbsButton';
import { render, screen } from '@testing-library/react';

describe('Tests on <ThumbsIcon />', () => {
	test('should have the card__border class', async () => {
		const { container } = render(<ThumbsButton id='1' withBg type='positive' selected={true} />);
		expect(container).toMatchSnapshot();
		expect(screen.getByRole('button').className).toContain('card__border');
	});

	test("shouldn't have the card__border class", async () => {
		render(<ThumbsButton id='1' withBg type='positive' selected={false} />);
		expect(screen.getByRole('button').className).not.toContain('card__border');
	});
});

import '@testing-library/jest-dom';
import { Card } from '../../src/components/Card';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cardInfo } from '../../src/fixtures/card-example';

describe('Tests con <Card />', () => {
	test('should add border to thumbs button, enable Vote Now button', async () => {
		const user = userEvent.setup();
		const wrapper = render(<Card {...cardInfo} />);
		expect(wrapper).toMatchSnapshot();
		expect(screen.getByTestId('vote_element')).toBeDisabled();
		expect(screen.getByTestId('custom-element1')).not.toHaveClass('card__border');
		await user.click(screen.getByTestId('custom-element1'));
		expect(screen.getByTestId('custom-element1')).toHaveClass('card__border');
		expect(screen.getByTestId('vote_element')).toBeEnabled();
		expect(screen.getByTestId('vote_element').textContent).toBe('Vote Now');
		expect(screen.getByTestId('about_element').textContent).toContain(cardInfo.category);
	});

	test('should reset all', async () => {
		const user = userEvent.setup();
		render(<Card {...cardInfo} />);
		await user.click(screen.getByTestId('custom-element1'));
		await user.click(screen.getByTestId('vote_element'));
		expect(screen.getByTestId('vote_element').textContent).toBe('Vote Again');
		expect(screen.getByTestId('about_element').textContent).toBe('Thank you for your vote!');
		await user.click(screen.getByTestId('vote_element'));
		expect(screen.getByTestId('custom-element1')).not.toHaveClass('card__border');
		expect(screen.getByTestId('custom-element2')).not.toHaveClass('card__border');
		expect(screen.getByTestId('vote_element')).toBeDisabled();
	});
});

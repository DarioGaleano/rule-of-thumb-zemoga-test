import '@testing-library/jest-dom';
import { getPercentage } from '../../src/helpers/getPercentage';
describe('Tests on getPercentage', () => {
	test('should recibe number values and return a valid percentage', () => {
		const percentage = getPercentage(12, 10);
		expect(isNaN(percentage)).toBe(false);
		expect(typeof percentage).toBe('number');
	});
});

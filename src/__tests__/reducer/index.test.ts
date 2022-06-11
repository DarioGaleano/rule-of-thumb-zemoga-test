import '@testing-library/jest-dom';
import { celebsReducer } from '../../reducer/index';
import { actions } from '../../config/actions';
import { celebsExample } from '../../fixtures/celebs-example';

describe('Tests on reducer', () => {
	test('should return an array of celebs', () => {
		const state = celebsReducer(celebsExample, { type: '', payload: '' });
		expect(state).toBe(celebsExample);
	});

	test('should increment positive vote of an element', () => {
		const action = {
			type: actions.toggleUp,
			payload: '62a36aaa3bf4864c16e32415',
		};
		const state = celebsReducer(celebsExample, action);
		expect(state[0].votes.positive > celebsExample[0].votes.positive).toBe(true);
	});

	test('should increment negative vote of an element', () => {
		const action = {
			type: actions.toggleDown,
			payload: '62a36aaa3bf4864c16e32415',
		};
		const state = celebsReducer(celebsExample, action);
		expect(state[0].votes.negative > celebsExample[0].votes.negative).toBe(true);
	});
});

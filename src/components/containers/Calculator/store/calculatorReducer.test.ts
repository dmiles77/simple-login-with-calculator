import calculatorReducer from './calculatorReducer';
import {
	CALCULATOR_KEY_PRESS
} from './types';

describe('calculatorReducer', () => {
	it('should set key press', () => {
		expect(
			calculatorReducer(undefined, {
				type: CALCULATOR_KEY_PRESS,
				key: 'k'
			})
		).toEqual({
			key: 'k'
		});
	});
});

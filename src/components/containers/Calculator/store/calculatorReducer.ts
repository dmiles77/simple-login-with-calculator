import {
	CalculatorState,
	CALCULATOR_KEY_PRESS,
	CLEAN_HISTORY,
	CalculatorActionTypes,
} from './types';

const INITIAL_STATE: CalculatorState = {
	pressHistory: []
};

const calculatorReducer = (
	state = INITIAL_STATE,
	action: CalculatorActionTypes
): CalculatorState => {
	switch (action.type) {
		case CALCULATOR_KEY_PRESS:
			return {
				...state,
				pressHistory: [...state.pressHistory, action.key]
			};
		case CLEAN_HISTORY:
				return {
					...state,
					pressHistory: []
				};
		default:
			return state;
	}
};

export default calculatorReducer;

export interface CalculatorState {
	pressHistory: string[];
}

export const CALCULATOR_KEY_PRESS = 'CalculatorKeyPress';
export const CLEAN_HISTORY = 'CleanHistory';

interface KeyPressAction {
	type: typeof CALCULATOR_KEY_PRESS;
	key: string;
}

interface CleanHistoryAction {
	type: typeof CLEAN_HISTORY;
}


export type CalculatorActionTypes = KeyPressAction | CleanHistoryAction;

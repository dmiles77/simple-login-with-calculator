import {
	CALCULATOR_KEY_PRESS,
	CLEAN_HISTORY,
	CalculatorActionTypes
} from './types';
import { Action, ActionCreator } from 'redux';

export const keyPressed: ActionCreator<Action> = (
	key: string,
): CalculatorActionTypes => {
	return {
		type: CALCULATOR_KEY_PRESS,
		key: key
	};
};

export const cleanHistory: ActionCreator<Action> = (
): CalculatorActionTypes => {
	return {
		type: CLEAN_HISTORY
	};
};


// Thunk async action creator:
export const keyPress = (key: string) => {
	return async (dispatch: any) => {
		dispatch(keyPressed(key));
	};
};

export const cleanCalcHistory = () => {
	return async (dispatch: any) => {
		dispatch(cleanHistory());
	};
};


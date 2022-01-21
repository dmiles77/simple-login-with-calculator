import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LoginActionTypes
} from './types';
import { Action, ActionCreator } from 'redux';
// import setAsyncGetRequest from '../../../../utilities/urls/urls';

export const loginRequestInit: ActionCreator<Action> = 
(
	loginValues: {email: string, userName: string}
): LoginActionTypes => {
	return {
		type: LOGIN_REQUEST,
		userName: loginValues.userName,
		email: loginValues.email
	};
};

export const loginRequestSuccess: ActionCreator<Action> = (
	isAuthorized: boolean,
): LoginActionTypes => {
	return {
		type: LOGIN_SUCCESS,
		isAuthorized: isAuthorized
	};
};

export const loginRequestFail: ActionCreator<Action> = (
	error: string
): LoginActionTypes => {
	return {
		type: LOGIN_FAIL,
		error: error,
	};
};

export const logout: ActionCreator<Action> = (
): LoginActionTypes => {
	return {
		type: LOGOUT,
	};
};

// Thunk async action creator:
export const fireLoginHttpRequest = (loginValues: {email: string, userName: string}) => {
	return async (dispatch: any) => {
		dispatch(loginRequestInit(loginValues));
		if (loginValues)
			try {
				// Fires an HTTP request only if the loginValues is not an empty
				/* let result = await setAsyncGetRequest(
					loginValues,
					'login'
				); */
				const isAuthorized: boolean = true;
				dispatch(loginRequestSuccess(isAuthorized));
			} catch (error) {
				dispatch(loginRequestFail());
			}
	};
};

export const logOut = () => {
	return async (dispatch: any) => {
		dispatch(logout());
	};
};


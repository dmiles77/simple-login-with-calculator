export interface LoginState {
	isAuthorized: boolean;
	isLoading?: boolean;
	error: string;
	userName?: string;
	email?: string;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

interface LoginRequestInitAction {
	type: typeof LOGIN_REQUEST;
	userName: string;
	email: string;
}

interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS;
	isAuthorized: boolean;
}

interface LoginFail {
	type: typeof LOGIN_FAIL;
	error: string;
}

interface Logout {
	type: typeof LOGOUT;
}

export type LoginActionTypes =
	| LoginRequestInitAction
	| LoginSuccessAction
	| LoginFail
	| Logout;

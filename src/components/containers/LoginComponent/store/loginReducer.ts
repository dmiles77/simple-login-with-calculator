import {
	LoginState,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LoginActionTypes
} from './types';

const INITIAL_STATE: LoginState = {
	isAuthorized: false,
	isLoading: false,
	error: '',
	userName: undefined,
	email: undefined
};

const loginReducer = (
	state = INITIAL_STATE,
	action: LoginActionTypes
): LoginState => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				error: '',
				userName: action.userName,
				email: action.email
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthorized: true,
				isLoading: false,
				error: ''
			};
		case LOGIN_FAIL:
			return {
				...state,
				error: action.error,
				isLoading: false,
				isAuthorized: false
			};
		case LOGOUT:
			return {
				...state,
				userName: '',
				email: '',
				isAuthorized: false
				};
		default:
			return state;
	}
};

export default loginReducer;

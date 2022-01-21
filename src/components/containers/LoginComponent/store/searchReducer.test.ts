import loginReducer from './loginReducer';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from './types';

describe('loginReducer', () => {
	it('should set isAuthorized and isLoading, when receiving LOGIN_SUCCESS action type', () => {
		expect(
			loginReducer(undefined, {
				type: LOGIN_SUCCESS,
				isAuthorized: true
			})
		).toEqual({
			isLoading: false,
			error: '',
			isAuthorized: true
		});
	});

	it('should set error when receiving LOGIN_FAIL action type', () => {
		expect(
			loginReducer(undefined, {
				type: LOGIN_FAIL,
				error: 'critical defect DB was infected by covid-19',
			})
		).toEqual({
			isLoading: false,
			error: 'critical defect DB was infected by covid-19',
			isAuthorized: false
		});
	});
});

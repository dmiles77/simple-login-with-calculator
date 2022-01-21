import axios from 'axios';

const setAsyncGetRequest = (inputVal: string, requestType: string) => {
	const apiKey: string = '';
	let url: string;
	let params: string;

	switch (requestType) {
		case 'login':
			url = 'https://sysaid.com/login';
			params = `?apikey=${apiKey}&q=${inputVal}&language=en-us HTTP/1.1`;
			break;

		default:
			url = '';
			params = '';
	}

	return axios.get(`${url}${params}`);
};

export default setAsyncGetRequest;

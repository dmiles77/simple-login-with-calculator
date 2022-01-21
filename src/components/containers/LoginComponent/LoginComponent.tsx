import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Input from '../../display/UI/Input/Input';
import { userNameInputTemplateData, emailInputTemplateData } from './LoginComponentInputTemplate';
import { fireLoginHttpRequest } from './store/actions';
import { Link } from "react-router-dom";
import './styles.scss';
interface IProps {
	loginRequest: (loginValues: { email: string, userName: string }) => void;
}

export const LoginComponent: React.FC<IProps> = ({
	loginRequest
}) => {

	const [userName, setUserNameInput] = useState(userNameInputTemplateData);
	const [email, setEmailInput] = useState(emailInputTemplateData);

	const handleUserNameInputChange: (e: any) => void = (event: any) => {
		const updatedValue: string = event.target.value;
		const updatedUserNameInput = {
			...userNameInputTemplateData,
			value: updatedValue,
		};

		setUserNameInput(() => updatedUserNameInput);
	};

	const handleEmailInputChange: (e: any) => void = (event: any) => {
		const updatedValue: string = event.target.value;
		const updatedEmailInput = {
			...emailInputTemplateData,
			value: updatedValue,
		};

		setEmailInput(() => updatedEmailInput);
	};

	const login: () => void = () => {
		const loginPayload = {
			userName: userName.value.toString(),
			email: email.value.toString()
		}
		loginRequest(loginPayload);
	};

	return (
		<div className="login-box">
			<h1>Login</h1>
			<div className="textbox">
				<Input
					elementConfig={{ ...userName.elementConfig }}
					value={userName.value}
					isFocused={userName.isFocused}
					handleChange={event => handleUserNameInputChange(event)}
				/>
			</div>
			<div className="textbox">
				<Input
					elementConfig={{ ...email.elementConfig }}
					value={email.value}
					isFocused={email.isFocused}
					handleChange={event => handleEmailInputChange(event)}
				/>
			</div>
			<div>
			<Link onClick={() => login()} to="/">
				<button className="btn">login</button>
			</Link>
			</div>
			
		</div>
	);
};

// Redux state & dispatch setup:
const mapStateToProps = () => {
	return {
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		loginRequest: (loginValues: { email: string, userName: string }) => dispatch(fireLoginHttpRequest(loginValues))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);

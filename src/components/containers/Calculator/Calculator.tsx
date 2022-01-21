import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { keyPress, cleanCalcHistory } from './store/actions';
import { logout } from '../LoginComponent/store/actions';
import './styles.scss';
import CalcDisplay from './CalcDisplay/CalcDisplay';
import CalcButton from './CalcButton/CalcButton';
import History from './History/History';
import Header from './Header/Header';
import { arrayOfCalcButtons } from './config';

interface IProps {
	keyPress: (key: string) => void;
	cleanHistory: () => void;
	logout: () => void;
	pressHistory: string[];
	userName: string;
}

export const Calculator: React.FC<IProps> = ({
	keyPress,
	cleanHistory,
	pressHistory,
	logout,
	userName
}) => {
	const [display, setDisplay] = useState('');
	const [isHistorySelected, setIsHistorySelected] = useState(false);

	const operators: { [key: string]: string } = {
		'*': 'multiple',
		'/': 'divide',
		'+': 'plus',
		'-': 'minus'
	};
	const operatorHandle: (key: string) => void = (key: string) => {
		if (display) {
			const lastChar = display.charAt(display.length - 1);
			if (!operators[lastChar]) {
				keyPress(key);
				setDisplay(`${display}${key}`);
			}
		}
	}
	const acClick: (key: string) => void = (key: string) => {
		if (display) {
			setDisplay('');
			keyPress(key);
		}
	}
	const cClick: (key: string) => void = (key: string) => {
		if (display) {
			const newDisplay = display.slice(0, -1);;
			setDisplay(newDisplay);
			keyPress(key);
		}
	}
	const calcResult: (key: string) => void = (key: string) => {
		if (display) {
			keyPress(key);
			try {
				// eslint-disable-next-line no-eval
				const result = eval(display); // we know it can be harmful
				setDisplay(result.toString());
			} catch {
				console.log("houston we have a problem");
			}
		}
	}
	const handleKeyPress: (key: string) => void = (key: string) => {
		switch (key) {
			case 'AC':
				acClick(key);
				break;
			case 'C':
				cClick(key);
				break;
			case '+':
				operatorHandle(key);
				break;
			case '-':
				operatorHandle(key);
				break;
			case '/':
				operatorHandle(key);
				break;
			case 'x':
				operatorHandle('*');
				break;
			case '=':
				calcResult(key);
				break;
			default:
				keyPress(key);
				setDisplay(`${display}${key}`);
				break;
		}
	};

	return (
		<>
			<Header
				setIsHistorySelected={(bool: boolean) => setIsHistorySelected(bool)}
				isHistorySelected={isHistorySelected}
				logout={() => logout()}
				userName={userName}
			/>
			{!isHistorySelected && (
				<div className="calculator">
					<div className="container">
						<CalcDisplay textToDisplay={display} />
						{arrayOfCalcButtons.map(
							(btnConf) => (
								<CalcButton
									key={btnConf.btnKey}
									calcKey={btnConf.btnKey}
									classStyle={btnConf.extraStyles}
									clicked={() => handleKeyPress(btnConf.btnKey)}
								/>
							)
						)}
					</div>
				</div>)}
			{isHistorySelected && (
				<History
					pressHistory={pressHistory}
					cleanHistory={() => cleanHistory()}
				/>
			)}
		</>
	);
};

// Redux state & dispatch setup:
const mapStateToProps = (state: any) => {
	return {
		pressHistory: state.calculator.pressHistory,
		userName: state.login.userName,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		keyPress: (key: string) => dispatch(keyPress(key)),
		cleanHistory: () => dispatch(cleanCalcHistory()),
		logout: () => dispatch(logout())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Calculator);

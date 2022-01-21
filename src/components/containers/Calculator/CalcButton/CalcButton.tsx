import React from 'react';

interface IProps {
	clicked: (key: string) => void;
	classStyle: string;
	calcKey: string;
}

export const CalcButton: React.FC<IProps> = ({
	clicked,
	classStyle,
	calcKey
}) => {

	return (
		<>
			<button className={`btn ${classStyle}`} onClick={() => clicked(calcKey)}>{calcKey}</button>
		</>
	);
};

export default CalcButton;

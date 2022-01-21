import React from 'react';

interface IProps {
	textToDisplay: string;
}

export const CalcDisplay: React.FC<IProps> = ({
	textToDisplay
}) => {

	return (
		<div className="display">
           	{textToDisplay}
          	<span className="cursor" />
        </div>
	);
};

export default CalcDisplay;

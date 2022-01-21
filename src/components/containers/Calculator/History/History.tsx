import React from 'react';

interface IProps {
	pressHistory: string[];
	cleanHistory: () => void;
}

export const History: React.FC<IProps> = ({
	pressHistory,
	cleanHistory
}) => {

	return (
		<>
			<div>
				History:
			</div>
			<div>
				{pressHistory.toString()}
				<div>
					<button onClick={() => cleanHistory()}>Clean History</button>
				</div>
			</div>
		</>
	);
};

export default History;

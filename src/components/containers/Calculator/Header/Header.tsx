import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
	setIsHistorySelected: (bool: boolean) => void;
	isHistorySelected: boolean;
	logout: () => void;
	userName: string;
}

export const Header: React.FC<IProps> = ({
	setIsHistorySelected,
	isHistorySelected,
	logout,
	userName
}) => {

	return (
		<header className='calc-header'>
			<div>
				<button onClick={() => setIsHistorySelected(true)} className={isHistorySelected ? 'btn-push green' : 'btn-push'} >History</button>
				<button onClick={() => setIsHistorySelected(false)} className={!isHistorySelected ? 'btn-push green' : 'btn-push'}>Calculator</button>
			</div>
			<div className="user-container">
				<NavLink
					onClick={() => logout()}
					to={'/login'}
					exact
				>
					<button className='btn-push' onClick={() => logout()}>Logout</button>
				</NavLink>
				<span>{userName}</span>
			</div>
		</header>
	);
};

export default Header;

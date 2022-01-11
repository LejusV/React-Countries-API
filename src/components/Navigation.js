import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='navigation'>
			<div className="part1">
				<NavLink to="/" >
				Accueil
				</NavLink>
				<NavLink to="/news" >
				News
				</NavLink>
			</div>
			<div className="part2">
				<NavLink to="/about" >
				À Propos
				</NavLink>
			</div>
		</div>
		);
	};
	
	export default Navigation;
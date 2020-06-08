import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Ingress_Logo.png" alt="logo" />

			<div className={s.loginBlock}>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>login</NavLink>}
			</div>
		</header>
	);
}

export default Header;
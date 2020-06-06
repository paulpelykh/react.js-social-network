import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="" />

			<div className={s.loginBlock}>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>login</NavLink>}
			</div>
		</header>
	);
}

export default Header;
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Friend = (props) => {
	let path = "/friends/" + props.id;

	return (
		<div className={s.friend}>
			<img src={props.image}></img>
			<NavLink to={path}>{props.name}</NavLink> 
		</div>
	);
}

export default Friend;
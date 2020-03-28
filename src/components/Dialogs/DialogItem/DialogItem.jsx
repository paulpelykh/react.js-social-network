import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return ( 
		<div className={s.logo}>
			{/* to do: dialog or dialogs or other shit i don't know */}
			<img src={props.image}></img>
			<NavLink to={path}>{props.name}</NavLink> 
		</div>
	);
}

export default DialogItem;
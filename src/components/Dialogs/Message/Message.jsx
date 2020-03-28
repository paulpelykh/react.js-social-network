import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
	let dot;
	if (!props.readen) {
		dot = <span className={s.notReaden}></span>;
	} 
	return (
		<div className={s.message}>
			{props.message}
			{dot}
		</div>
	);
}

export default Message;

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} image={d.image}/> );
	let messagesElements = state.messages.map(m => <Message message={m.message} readen={m.readen}/>);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;  
		props.updateNewMessageBody(body);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElements }	
			</div>
			<div className={s.messages}>
				<div>{ messagesElements }</div>
				<div>
					<div><textarea value={newMessageBody}
								   onChange={onNewMessageChange}
								   placeholder='Enter your message'></textarea></div>
					<div><button onClick={ onSendMessageClick } >Send</button></div>
				</div>
			</div>
			
			{/* todo: delete this shit */}
			{/* <div className={s.sendMessage}>
				<SendMessage />
			</div> */}
		</div>
	);
}

export default Dialogs;
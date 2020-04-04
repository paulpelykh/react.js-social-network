import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friend from './Friend';

const Navbar = (props) => {
	// let state = props.store.getState().sidebar;
	// let FriendsElements = state.friends.map(friend => <Friend name={friend.name} id={friend.id} image={friend.image}/> );

	return (
		<nav className={s.nav}>
	        <div className={s.item}>
	          <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
	        </div>
	        <div className={`{s.item} {s.active}`}>
	          <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
	        </div>
	        <div className={s.item}>
	          <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
	        </div>
	        <div className={s.item}>
	          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
	        </div>
	        <div className={s.item}>
	          <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
	        </div>

			{/* Friends list */}
	        {/* <div className={s.friendsList}>
	          <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
	         	<div className={s.friends}>
	         		{ FriendsElements }
	          	</div>
	        </div> */}
	    </nav>	
    );
}

export default Navbar;
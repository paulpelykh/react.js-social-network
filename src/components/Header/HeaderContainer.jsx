import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { authMe } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		authMe()
			.then(user => {
                this.props.setAuthUserData(user.id, user.email, user.login);
			});

	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
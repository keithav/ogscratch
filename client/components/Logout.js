import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../componentStyles/logout.css';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
	clearStateOnLogout: () => {
		dispatch(actions.clearStateOnLogout())
	},
})
class Logout extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {

		this.props.clearStateOnLogout();
	}

	render() {
		return (
			<div id="logout">
				<div id='titleAndLink'>
					<strong>
						<h1>Thank you for visiting, see you next time.</h1>
						<br></br>
						<Link to='/'>Back to Login</Link>
					</strong>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
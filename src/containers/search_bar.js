import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import '../App.css';
import { fetchWeather } from '../actions/index';

const Search = styled.div`
  display: flex;
  justify-content: center;
`;


class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: 'Prague' };
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<Search>
				<form 
				onSubmit={this.onFormSubmit.bind(this)}>
					<input
						placeholder="Enter City!"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange.bind(this)}
						required
					 />
					<span className="input-group-btn">
						<button type="submit" className="submit-btn">GO</button>
					</span>
				</form>
			</Search>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);







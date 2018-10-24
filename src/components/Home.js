import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			age: this.props.initialAge,
			status: 0,
			homeLink: this.props.initialName
		}
		setTimeout(()=>{
			this.setState({
				status: this.state.status+1
			})
		}, 1000)
	}

	onMakeOlder() {
		this.setState({
			age:this.state.age+3
		})
	}

	handleGreet() {
		this.props.greet(this.state.age);
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		})
	}

	componentWillMount() {
		console.log("Component will mount");
	}

	componentDidMount() {
		console.log("Component did mount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Component will receive props", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Component should update", nextProps, nextState);
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update", nextProps, nextState);
	}

	componentDidUpdate(nextProps, nextState) {
		console.log("Component did update", nextProps, nextState);
	}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          	<div>your name is {this.props.name}, your age is {this.state.age}</div>
          	<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
          	<p>{this.state.status}</p>
          	<hr/>
          	<button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
          	<hr/>
			<input type="text" defaultValue={this.props.initialName} value={this.state.homeLink} onChange={this.onHandleChange.bind(this)}/>
          	<hr />
          	<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
          </div>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	user: PropTypes.object,
	greet: PropTypes.func,
	initialName: PropTypes.string
};
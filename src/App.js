import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from './actions/getDetails';
import { handleChange } from './actions/name';




class App extends Component {


  handleChanges = (e) => {
    this.props.handleChange(e.target.value);
  }

  handleClick = (e) => {
    e.preventDefault();
    const name = this.props.typed;
    this.props.getData(name);
  }

  render() {

    return (
      <div className="App">
      <form>
      <input type="text" ref="name" placeholder="enter your username" onChange={ this.handleChanges }/>
      <button onClick={this.handleClick}> get the details</button>
      <p>{this.props.user ? (this.props.user.name ? this.props.user.name: ''): ''}</p>
      <p>{this.props.user ? (this.props.user.location ? this.props.user.location: ''): ''}</p>       
      </form>
      
      </div>
    );
  }
}

const mapStateToProps= (state) =>
{
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getData,
    handleChange
  },
  dispatch,)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

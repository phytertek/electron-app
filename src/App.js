import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {Card, } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <AppBar title="Sign In" showMenuIconButton={false}/>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          fullWidth={true}
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password "
          fullWidth={true}
        />
      </div>
    );
  }
}

export default App;

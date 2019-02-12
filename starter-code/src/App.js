import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="text">

        <h1> Say hello to <br/>ReactJS</h1>
        <h3>You will learn a Frontend<br/> 
        framework from scratch,<br/>
        to become a Ninja Developer.</h3>
        </div>

<div class="container">

<img src="images/react-logo.svg" alt="logo"></img>
<button type="button" class="btn btn-light">Awesome !</button>

</div>


      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
import   Welcome   from './components/Welcome';
import   Hello   from './components/Hello';
import   Message   from './components/Message';
import   Counter   from './components/Counter';
import   EventBind   from './components/EventBind';
import   Form   from './components/Form';
import   Todo   from './components/Todo';










class App extends Component {
  render() {
  return (
    <div className="App">
      <Todo />
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
     {/* <Hello /> */}
    </div>
  );
  }
}

export default App;

import React from 'react';

import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard';
import UserBoard from './components/UserBoard';


function App() {
  return (
    <div className="App">
    <h1>React</h1>
      <UserBoard/>
     <PublishMessage/>
     <MessageBoard />     
     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import Posts from './components/Post'
import PostForm from './components/PostForm'
import store from './redux/store'
import {Provider} from 'react-redux'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      
    }
  }
  render(){
    return(
      <Provider store={store}>

      
      <div className="App">
        <h1 style={{marginLeft:500}}>Ahmad zafar</h1>
          <PostForm/>
          <hr></hr>
          <Posts/>
      </div>
      </Provider>
    )
  }
}
export default App;
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import  ShopPage from'./pages/shop/shop.component.jsx'
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth } from '../src/firebase/firebase.utils.js'
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    </div>
)

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged(user => 
      {
        this.setState({currentUser:user});  
      } );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>

      </Switch>
    </div>
  );
  }
};
export default App;

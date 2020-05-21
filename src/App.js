import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import  ShopPage from'./pages/shop/shop.component.jsx'
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument } from '../src/firebase/firebase.utils.js'
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser : {
                id :snapshot.id,
                ...snapshot.data()
              }
            })
            console.log(this.state);
          })
        }
        else
        this.setState({currentUser:userAuth});
    })
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

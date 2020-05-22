import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import  ShopPage from'./pages/shop/shop.component.jsx'
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument } from '../src/firebase/firebase.utils.js'
import { setCurrentUser } from './redux/user/user.actions'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    </div>
)

class App extends React.Component {


  unsubscribeFromAuth = null; 
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id :snapShot.id,
                ...snapShot.data()
            })
            //console.log(this.state);
          })
        }
        else
          setCurrentUser(userAuth);
      })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>

      </Switch>
    </div>
  );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);

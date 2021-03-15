import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions';

import './pages/homepage/homepage.syles.scss';




class App extends React.Component{
// To keep track of signed in users

unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            currentUser:{
              id: snapShot.id, 
              ...snapShot.data()
            }
          })
        });
      }
      //If user logs out set state to null
      setCurrentUser( userAuth);

    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div> 
     <Header/>
     {/*Using Switch for Routing*/}
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route  path='/shop' component={ShopPage} />
       <Route exact path='/signin' render= {()=>
        this.props.currentUser ? (
          <Redirect to='/'/>
        ) : (
          <SignInAndSignUpPage/>
        )
      } />
  
     </Switch>
     
      </div>
      );

  }
  
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

//Connect necessary to use reducers 
export default connect(mapStateToProps, mapDispatchToProps )(App);

import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import "./fbConfig";
import "firebase/firestore";

var uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.user.sendEmailVerification();
          console.log("Check your email.");
        } catch (e) {
          console.log(e);
        }
      }
      return false;
    },
  },
  
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("Successufully Signed out");
    })
    .catch(function () {
      console.log("Error Signed out");
    });
};

const Signup = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return (authObserver,user);
    
  });

  console.log("user", user);

  if (user) {
    return (
      <>
        <div>

        <p>
          Welcome, {user.displayName} <br />
          <small>{user.email}</small> <br />
          <button onClick={signOut}>Sign out</button>
        </p>
        <h1 align="center">WELCOME TO GLANCE TODAY....</h1>
      
        </div>
      </>
    );
  } else {
    return (
      <>
        <div> 
        <h4 style={{align:"center"}}> Sign up / Register </h4>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </> 
    );
  }
};


export default Signup;

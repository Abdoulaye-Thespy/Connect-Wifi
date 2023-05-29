import React, {useState} from "react";
import '@aws-amplify/ui-react/styles.css';
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import '../App.css';
import mylogo from '../images/mylogo.png';
import { Flex } from '@aws-amplify/ui-react';

function SignUp(){
    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", email: "", password: "", passwordConfirm:""});
    function handleChange(e) {
        setUser(prevUser => {
          return {
            ...prevUser,
            [e.target.name]: e.target.value
          };
        });
      }

      async function handleSignUp(event) {
        event.preventDefault();
        console.log(user);
        const {username, email, password} = user;
    
        try {
          await Auth.signUp({
              username,
              password,
              attributes: {
                  email
              }

          });
    
          console.log('Sign-up successful!');
          navigate(`/confirm/${username}`);
        } catch (error) {
          console.log('Error signing up:', error);
          // Handle sign-up error, e.g., display error message
        }
      }
      

    return(
        <div className="App">
        <Flex direction={{ base: 'column', large: 'column' }}>
        <header className="screen">
              <p className="text_header text">
                Powered by <span className="giga">FREELANCE</span>
                <span className="net">CONNECT</span>. 
              </p>
              <img src={mylogo} alt="Giganet Logo" className="logo" />
        </header>
          <div id="connect" className="container tab-pane active">
          <br />
          <h3 className="text align-center">Enregistrez vous ici</h3>
          <p className="text textB">
             Veuillez entrer vos informations
          </p>
          <form className="loginForm" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text">
                Identifiant
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Votre identifiant"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Votre identifiant"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text">
                Mot de passe.
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mot de passe"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text">
                Confirmer le mot de passe.
              </label>
              <input
                type="password"
                name="passwordConfirm"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mot de passe"
                onChange={handleChange}
              />
            </div>
            <div className="btnDiv">
             <div>
              <button type="submit" className="btn btn-grad btn-grad34 text">
                  Sign Up
                </button>
              </div>
              <div>
                <span>Already have an account? </span>
                <Link to="/signin" className="sign"> Sign In</Link>
              </div>
            </div>
  
          </form>
        </div>
         <div>
            <div className="voir_plus">
              <p><i className="fas fa-long-arrow-alt-right"></i></p>
            </div>
            <p className="text textA textB">Le meilleur de l'internet Wifi haut débit</p>
          </div>
       </Flex>
      </div>
    )
}

export default SignUp;
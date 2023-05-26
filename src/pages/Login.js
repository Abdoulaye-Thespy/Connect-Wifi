import React, { useState } from "react";
import '../App.css';
import '@aws-amplify/ui-react/styles.css';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import mylogo from '../images/mylogo.png';
import { Flex } from '@aws-amplify/ui-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signIn(e) {
    e.preventDefault(); // Prevent the form from being submitted and page reload

    try {
      const user = await Auth.signIn(username, password);
      console.log('User signed in:', user);

      // Handle successful sign-in, e.g., navigate to a new page
    } catch (error) {
      console.log('Error signing in:', error);
      // Handle sign-in error, e.g., display error message
    }
  }

  return (
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
          <h3 className="text">Connexion ici</h3>
          <p className="text textB">
            Veuillez entrer votre identifiant et votre mot de passe
          </p>
          <form className="loginForm" onSubmit={signIn}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text">
                Identifiant
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Votre identifiant"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text">
                Mot de passe.
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btnDiv">
              <div>
                <button type="submit" className="btn btn-grad textA">
                  Connexion
                </button>
              </div>
              <div>
                <span>You don't have an account? </span>
                <Link to="/signup">Sign Up</Link>
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
  );
}

export default Login;

import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Flex } from '@aws-amplify/ui-react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import mylogo from '../images/mylogo.png';

function Verification() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [verificationCode, setVerificationCode] = useState('');

  async function handleVerification(event) {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(username, verificationCode);

      console.log('Verification successful!');
      navigate('/signin')
      // Handle successful verification, e.g., navigate to a new page
    } catch (error) {
      console.log('Error verifying sign-up:', error);
      // Handle verification error, e.g., display error message
    }
  }

  return (
    // <div>
    //   <h2>Verification</h2>
    //   <form onSubmit={handleVerification}>
    //     <input
    //       type="text"
    //       placeholder="Verification Code"
    //       value={verificationCode}
    //       onChange={(e) => setVerificationCode(e.target.value)}
    //     />
    //     <button type="submit">Verify</button>
    //   </form>
    // </div>
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
              <h3 className="text">Verification</h3>
              <p className="text textB">
                Pour verifier votre compte, veuillez entrer le code sur votre Email.
              </p>
              <form className="loginForm" onSubmit={handleVerification}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text">
                    Code de verification
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    />
                </div>
                <div className="btnDiv">
                  <div>
                    <button type="submit" className="btn btn-grad textA">
                      Verifier
                    </button>
                  </div>
                </div>
              </form>
            </div>
             <div>
                <div className="voir_plus">
                  <p><i className="fas fa-long-arrow-alt-right"></i></p>
                  <Link to="/signin"> Sign In</Link>
                </div>
                <p className="text textA textB">Le meilleur de l'internet Wifi haut débit</p>
              </div>
           </Flex>
          </div>
  );
}

export default Verification;

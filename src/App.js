import 'bootstrap/dist/css/bootstrap.min.css';
import mylogo from './images/mylogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="screen">
        <img src={mylogo} alt="Giganet Logo" className="logo" />
        <p className="text_header text">
          Powered by <br />
          FreelanceConnect
        </p>
      </header>
        <div id="connect" className="container tab-pane active">
        <br />
        <h3 className="text">Connexion</h3>
        <p className="text textB">
          Pour vous connecter à <span className="giga">FREELANCE</span>
          <span className="net">CONNECT</span>. Veuillez entrer votre identifiant et votre mot de passe
        </p>
        <form className="loginForm" action="./connect.html">
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="text">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Mot de passe"
            />
          </div>
          <div className="btnDiv">
            <div>
              <button type="submit" className="btn btn-grad textA">
                Connexion
              </button>
            </div>
            <div>
            <button type="submit" className="btn btn-grad btn-grad34 text">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
          <p className="text textA textB">100Fcfa-250Mb</p>
          <p className="text textA textB">500Fcfa-1Gb</p>
          <div className="voir_plus">
            <p>Voir plus</p>
            <p><i className="fas fa-long-arrow-alt-right"></i></p>
          </div>
          <p className="text textA textB">Le meilleur de l'internet Wifi haut débit</p>
        </div>
    </div>


  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="App">
        <div id="connect" className="container tab-pane active">
          <div className="connecté" id="con">
            <span className="vert">
              <i className="fas fa-circle"></i>
            </span>
            <span className="blanc">Connecté</span>
          </div>
    
          <div className="deconnecté" id="decon">
            <span className="rouge">
              <i className="fas fa-circle"></i>
            </span>
            <span className="blanc">Déconnecté</span>
          </div>
    
          <div className="connect1">
            <div className="connect1_Yellow">
              <p>Identifiant</p>
              <p>IP Address</p>
              <p>Temps Utilisé</p>
              <p>Temps Restant</p>
              <p>Upload/Download</p>
              <p>Mac Address</p>
              <p>Refresh</p>
            </div>
            <div className="connect1_White">
              <p>AXVGDGDDGD</p>
              <p>10.10.9.217</p>
              <p>4 min 32 sec</p>
              <p>23 h 32 min 9 sec</p>
              <p>888.kib/242kib</p>
              <p>E8:B4:C8:7F:C8:18</p>
              <p>1 min</p>
            </div>
          </div>
    
          <div className="logout">
            <div>
              <button type="submit" className="btn btn-grad3 btn-grad39 textA text" id="logout"><Link to="/signin">Logout</Link></button>
              <br /><br />
              <button type="submit" className="btn btn-grad3 btn-grad38 textA text" id="stop" >Stop</button>
              <br /><br />
              <button type="submit" className="btn btn-grad3 btn-grad36 textA text" id="start">Start</button>
              <br /><br />
            </div>
          </div>
        </div>
     </div>
    )
} 

export default Home;
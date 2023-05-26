import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/Signup';
import Welcome from './pages/Welcome';
import Verification from './pages/Verification';

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="signin" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/confirm" element={<Verification />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>

  );
}

export default App;

import "./App.css";
import Form from "./Compn/Form";
import Signin from "./Compn/Signin";
import Create from "./Compn/Create";
import Account from "./Compn/Account";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./component/SignupPage/SignupPage";
import Home from "./component/Homepage/Homepage";
import SignIn from "./component/SignInpage/SignInpage";
function App() {
  return (
    
     
     <Router >
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn />} />
        
      </Routes>
    </Router>
     
   
  );
}

export default App;
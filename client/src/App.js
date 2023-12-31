import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element = {<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;

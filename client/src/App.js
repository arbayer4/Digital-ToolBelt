import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ProjectsContainer from "./containers/ProjectsContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/sign-up">
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path="/">
          {currentUser ? (
            <ProjectsContainer
              handleLogout={handleLogout}
              currentUser={currentUser}
            />
          ) : (
            <LandingPage />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import LandingPage from "./screens/LandingPage/LandingPage";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import ProjectsContainer from "./containers/ProjectsContainer";
import Spinner from "./utils/spinner";
import Layout from "./components/shared/Layout/Layout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    console.log(userData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    if (!userData.username) {
      return userData;
    } else {
      setCurrentUser(userData);
      history.push("/");
      return false;
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <Layout user={currentUser} handleLogout={handleLogout}>
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
        </Layout>
      )}
    </div>
  );
}

export default App;

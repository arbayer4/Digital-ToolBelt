import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          const prom = handleLogin(formData);
          prom.then((value) => {
            if (value?.errors === "unauthorized") {
              setMessage("Incorrect Password");
            } else {
              setMessage("Username Not Found");
            }
          });
        }}
      >
        <h3>Log In</h3>
        <label htmlFor="sign-in-username">Username:</label>
        <input
          id="sign-in-username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="sign-in-password">Password:</label>
        <input
          id="sign-in-password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <div className="sign-in-up-error">{message}</div>
        <button className="brown-button" type="submit">
          Login
        </button>
        <div>No account?</div>
        <Link to="sign-up">SignUp</Link>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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
      <Link to="sign-up">SignUp</Link>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <label htmlFor="sign-in-username">Username:</label>
        <input
          id="sign-in-username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="sign-in-password">Password:</label>
        <input
          id="sign-in-password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

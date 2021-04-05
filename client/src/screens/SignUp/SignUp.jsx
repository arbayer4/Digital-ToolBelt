import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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
        className="signup-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <h3>Register</h3>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="sign-up-email">Email:</label>
        <input
          id="sign-up-email"
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="sign-up-password">Password:</label>
        <input
          id="sign-up-password"
          placeholder="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="sign-up-password-confirm">Password:</label>
        <input
          id="sign-up-password-confirm"
          placeholder="Confirm Password"
          type="password"
          name="password-confirm"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>Already have an account?</div>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignUp;

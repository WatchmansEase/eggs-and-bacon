import { useRef, useState, useEffect, useContext } from "react"; // Adding React Hooks
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext); // When successful login, setAuth state in global context
  const userRef = useRef(); // userRef set focus on first input when component loads
  const errRef = useRef(); // errRef set focus on the error when if it occurs

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // 4 pieces of state

  // Set focus on first input when component load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Empty error message, if user changes their username or password
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default havior of the page, which is to reload upon submit

    try {
      debugger; // Remove when you want to use
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      //Get token from BE
      const accessToken = response?.data?.accessToken;
      setAuth({ user, pwd, accessToken }); // If success - store user information in Auth object, which saved in  our global context
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (error) {
      //Error handling here
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else if (error.response?.status === 404) {
        setErrMsg("Error 404 - CHANGE ME MOVING FORWARD");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus(); // Set the focus on the error display
    }
  };

  return (
    <>
      {success ? (
        <section>
          {" "}
          <h1> You are logged in!</h1> <br />{" "}
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef} // Set focus on the Username field
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user} //Crucial for clearing inputs upon submission
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd} //Crucial for clearing inputs upon submission
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;

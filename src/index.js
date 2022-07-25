import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/Home"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        element={<Home />}
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        element={<About/>}
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        element={<Login/>}
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}



function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
         <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
  }

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
  <Home />
  <About />
  <Login />
  <Routes>
  <Route   path="/Home" element={<Home />}>
    </Route>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/login" element={<Login/>}> 
    </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


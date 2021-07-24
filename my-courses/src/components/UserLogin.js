import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";
import base_url from "../Api/service";

const UserLogin = () => {
  const [user, getuser] = useState([]);

  var allco = [];
  
  //login
  function logincliked() {
    console.log(user);
    getAllUsers();
  }

  const getAllUsers = () => {
    axios.get(`${base_url}/getusers`).then(
      (response) => {
        allco = response.data;
        allco.forEach((element) => {
          if (
            user.username === element.username &&
            user.password === element.password
          ) {
            axios.post(`${base_url}/setcurrentuser/${user.username}`).then(
              (response)=>{
              }
            );
            toast.success("Login Successfuly");
            document.getElementById("userprofile").style.display = "block";
            document.getElementById("loginpage").style.display = "none";
          }
        });
      },
      (error) => {
        toast.error("Something Went Wrong");
      }
    );
  };

  //signup
  const [user1, setuser] = useState([]);

  function signupclicked() {
    console.log(user1);
    addUser(user1);
  }

  const addUser = (user) => {
    axios.post(`${base_url}/adduser`, user).then(
      (response) => {
        console.log(response);
        toast.success("Successfully SignedUp");
      },
      (error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      }
    );
  };

  //logout
  function logoutclicked() {
    document.getElementById("userprofile").style.display = "none";
    document.getElementById("loginpage").style.display = "block";
    user.username = null;
    user.password = null;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    axios.post(`${base_url}/setcurrentuser/${user.username}`).then(
      (response)=>{
      }
    );
  }

  function suc() {
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("signuppage").style.display = "block";
  }

  function lic() {
    document.getElementById("loginpage").style.display = "block";
    document.getElementById("signuppage").style.display = "none";
  }

  return (
    <div class="text-center" style={{width:"400px"}}>
      {/* login */}
      <div id="loginpage">
        <h1>Log In Page</h1>
        <br />
        <Input 
          type="text"
          placeholder="UserName"
          id="username"
          onChange={(e) => {
            getuser({ ...user, username: e.target.value });
          }}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => {
            getuser({ ...user, password: e.target.value });
          }}
        />
        <br />
        <Button type="submit" onClick={logincliked} className="mx-2 bg-primary">
          Log In
        </Button>
        <br />
        <br />
        <h5>Don't Have Account?</h5>
        <br />
        <Button onClick={suc} className="bg-warning">
          Sign Up
        </Button>
      </div>

      {/* signup */}
      <div id="signuppage" style={{ display: "none", width:"400px"}}>
        <h1>Sign Up Page</h1>
        <br />
        <Input
          type="text"
          placeholder="UserName"
          onChange={(e) => {
            setuser({ ...user1, username: e.target.value });
          }}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuser({ ...user1, password: e.target.value });
          }}
        />
        <br />
        <Button onClick={signupclicked} className="mx-2 bg-primary">
          Sign Up
        </Button>
        <br />
        <br />
        <h5>Already Have Account?</h5>
        <br />
        <Link to="/" className="btn btn-warning" onClick={lic}>
          Log In
        </Link>
      </div>

      {/* logout */}
      <div id="userprofile" style={{ display: "none", width:"400px"}}>
        <h1>User Profile</h1>
        <br />
        <h3>User Name : {user.username}</h3>
        <br />
        <Button className="bg-danger" onClick={logoutclicked}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserLogin;

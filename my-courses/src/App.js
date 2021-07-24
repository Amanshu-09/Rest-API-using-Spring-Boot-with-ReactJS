import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import UserLogin from "./components/UserLogin";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <h1 className="text-center py-3 bg-warning">
            Welcome to My Courses
          </h1>
          <div style={{height:"400px"}}>
            <UserLogin/>
          </div> 
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>             
              <Route path="/home" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-courses" component={AllCourses} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
      <div style={{height:"200px"}}></div>
    </div>
  );
}

export default App;
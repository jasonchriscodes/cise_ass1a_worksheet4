import React from "react";

// import Home from "./pages/Home";
// import SEPractice from "./pages/SE-Practice";
// import SubmitArticle from "./pages/Submit-Article"; 
// import NotFoundPage from "./pages/404";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
                <li><a href = "/">Home</a></li>
                <li><a href = "/SEPractice">Select the Practice</a></li>
                <li><a href = "/SubmitArticle">Submit an Article</a></li>
            </ul>
          <div className="content">
          </div>
        </div>
        </Router>
    );
}
export default App;
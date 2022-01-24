import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Home/Blog/Blog";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import TopHeader from "./components/Shared/TopHeader/TopHeader";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Box className="App">
     <Router>
       <TopHeader/>
       <Navigation/>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route  path='/home'>
           <Home/>
         </Route>
         <Route path='/shop'>
           <Shop/>
         </Route>
         <Route path='/blog'>
           <Blog/>
         </Route>
         <Route path='/contact'>
           <Contact/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
    </Box>
  );
}

export default App;

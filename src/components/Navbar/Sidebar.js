import React from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import DNDResources from '../characterFunctionality/DNDResources';
import Name from '../characterFunctionality/NameResources';
import Main from '../characterFunctionality/CharaIndex';
import './Sidebar.css';


const Sidebar = (props) => {
    return (
        <Router>
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <nav>
                    <h2>Navigation</h2>
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/"></Link></li>
                    <li><Link to="/main">Characters</Link></li>
                   <li><Link to="/name">Name Resources</Link></li>
                    <li><Link to="/dndresources">DND Resources</Link></li>
                </ul>
                </nav>
            </div>
        

        <div className="sidebar-route">
            <Switch>
            <Route exact path="/"><Main token={props.token} setSessionToken={props.setSessionToken}/></Route>
            <Route path="/main"><Main token={props.token} setSessionToken={props.setSessionToken}/></Route>
            <Route path="/name"><Name /></Route>
            <Route path="/dndresources"><DNDResources /></Route>
            </Switch>
           
        </div>
    </div>
  </Router>
    );
   
};
export default Sidebar;
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VSCodeFileBrowser from './projects/VSCodeFileBrowser/VSCodeFileBrowser';
import ToDoList from './projects/ToDoList/ToDoList';
import CounterWithProps from './projects/CounterWithProps/CounterWithProps';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="d-flex">
                <nav className="d-flex pe-3 bg-light flex-column" style={{ height: "100vh" }}>
                    <h3 className="text-center">PROJECT LEGEND</h3>
                    <ul>
                        <li>Props Based</li>
                        <ul>
                            <li><Link to="/counter-props">Counter</Link></li>
                            <li><Link to="/to-do-list-props">To Do List</Link></li>
                            <li><Link to="/vscode-file-browser">Vs Code File Browser</Link></li>
                        </ul>
                        {/* <li>Redux Based</li>
                        <ul>
                            <li><Link to="/counter-redux">Counter</Link></li>
                            <li><Link to="/to-do-list-redux">To Do List</Link></li>
                        </ul> */}
                        <li><Link to="/infinite-scroll">Infinite Scroll</Link></li>
                    </ul>
                </nav>
                <div className="ps-3">
                    <Routes>
                        <Route path="/counter-props" element={<CounterWithProps />} />
                        <Route path="/to-do-list-props" element={<ToDoList />} />
                        <Route path="/vscode-file-browser" element={<VSCodeFileBrowser />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

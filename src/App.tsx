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
                        <li><Link to="/counter-with-props">Counter With Props</Link></li>
                        <li><Link to="/to-do-list">To Do List</Link></li>
                        <li><Link to="/vscode-file-browser">Vs Code File Browser</Link></li>
                    </ul>
                </nav>
                <div className="ps-3">
                    <Routes>
                        <Route path="/counter-with-props" element={<CounterWithProps />} />
                        <Route path="/to-do-list" element={<ToDoList />} />
                        <Route path="/vscode-file-browser" element={<VSCodeFileBrowser />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

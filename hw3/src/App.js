import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Population from "./Population";
import Custom from "./Custom";

export default function App() {
    return (
        <main className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        React HW3
                    </Link>
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                        <Link className="nav-link" to="/list">
                            List
                        </Link>
                        <Link className="nav-link" to="/population">
                            Population
                        </Link>
                        <Link className="nav-link" to="/custom">
                            Custom
                        </Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/population" element={<Population />} />
                <Route path="/custom" element={<Custom />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    );
}

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Population from "./Population";
import Area from "./Area";

export default function App() {
    return (
        <main className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm rounded">
                <div className="container-fluid">
                    {/* Hamburger button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home" end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/list">
                                    List
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/population">
                                    Population
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/area">
                                    Area
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/population" element={<Population />} />
                <Route path="/area" element={<Area />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    );
}

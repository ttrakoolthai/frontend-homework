import React from "react";

export default function Home() {
    return (
        <section>
            <h1>Welcome to Homework 3 - React and Charts</h1>
            <p className="mt-3">This project demonstrates:</p>
            <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">React Router navigation</li>
                <li className="list-group-item">
                    Fetching data from a REST API
                </li>
                <li className="list-group-item">
                    Displaying population charts using Chart.js
                </li>
                <li className="list-group-item">
                    Custom charts and visualizations
                </li>
            </ul>
            <p className="mt-3">
                Use the navigation bar above to explore the different pages.
            </p>
        </section>
    );
}

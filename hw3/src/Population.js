import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Population() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/region/americas")
            .then((res) => {
                const southAmerica = res.data
                    .filter((c) => c.subregion === "South America")
                    .sort((a, b) => b.population - a.population); // Sort by population descending
                setCountries(southAmerica);
            })
            .catch((err) => console.error(err));
    }, []);

    const data = {
        labels: countries.map((c) => c.name),
        datasets: [
            {
                label: "Population",
                data: countries.map((c) => c.population),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Population of South American Countries",
                font: { size: 18 },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => value.toLocaleString(),
                },
            },
        },
    };

    return (
        <section className="pb-5">
            <h1 className="text-start">Population Chart</h1>
            {countries.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <Bar data={data} options={options} />
            )}
        </section>
    );
}

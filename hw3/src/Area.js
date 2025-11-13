import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Area() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/region/americas")
            .then((res) => {
                const southAmerica = res.data.filter(
                    (c) => c.subregion === "South America"
                );
                setCountries(southAmerica);
            })
            .catch((err) => console.error(err));
    }, []);

    const colors = [
        "#4dc9f6",
        "#f67019",
        "#f53794",
        "#537bc4",
        "#acc236",
        "#166a8f",
        "#00a950",
        "#58595b",
        "#8549ba",
        "#ffb400",
        "#ff6384",
        "#36a2eb",
    ];

    const data = {
        labels: countries.map((c) => c.name),
        datasets: [
            {
                label: "Proportion of Country Areas",
                data: countries.map((c) => c.area || 0),
                backgroundColor: countries.map(
                    (_, i) => colors[i % colors.length]
                ),
                borderColor: "#fff",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    padding: 15,
                    boxWidth: 20,
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: "Proportion of Country Areas",
                font: {
                    size: 18,
                },
            },
        },
    };

    return (
        <section>
            <h1 className="text-start mb-3">Proportion of Country Areas</h1>
            {countries.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        height: "500px",
                        padding: "1rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        borderRadius: "0.5rem",
                        backgroundColor: "#fff",
                    }}
                >
                    <Pie data={data} options={options} />
                </div>
            )}
        </section>
    );
}

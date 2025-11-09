import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Custom() {
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

    const data = {
        labels: countries.map((c) => c.name),
        datasets: [
            {
                label: "Area (km²)",
                data: countries.map((c) => c.area || 0),
                backgroundColor: countries.map(
                    () =>
                        `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
                            Math.random() * 255
                        )},${Math.floor(Math.random() * 255)},0.6)`
                ),
                borderColor: countries.map(() => "#fff"),
                borderWidth: 1,
            },
        ],
    };

    return (
        <section>
            <h1>Custom Visualization: Country Areas</h1>
            {countries.length === 0 ? <p>Loading...</p> : <Pie data={data} />}
        </section>
    );
}

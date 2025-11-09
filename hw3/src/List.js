import React, { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
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

    return (
        <section>
            <h1>South American Countries</h1>
            {countries.length === 0 && <p>Loading...</p>}
            <div className="row">
                {countries.map((c) => (
                    <div key={c.name} className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src={c.flags.svg}
                                className="card-img-top"
                                alt={c.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{c.name}</h5>
                                <p className="card-text">
                                    Population: {c.population.toLocaleString()}{" "}
                                    <br />
                                    Capital: {c.capital || "N/A"} <br />
                                    Region: {c.region}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

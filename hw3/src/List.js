import React, { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
    const [countries, setCountries] = useState([]);
    const [listView, setListView] = useState(false);

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
        <section className="pb-5">
            <h1 className="mb-4">South American Countries</h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="mb-0"></p>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => setListView(!listView)}
                >
                    {listView ? "Card View" : "List View"}
                </button>
            </div>

            {countries.length === 0 && <p>Loading...</p>}

            {listView ? (
                <ul className="list-group">
                    {countries.map((c) => (
                        <li
                            key={c.name}
                            className="list-group-item d-flex align-items-center"
                        >
                            <img
                                src={c.flags.svg}
                                alt={`Flag of ${c.name}`}
                                style={{
                                    width: "40px",
                                    height: "25px",
                                    marginRight: "10px",
                                    objectFit: "cover",
                                }}
                            />
                            <div>
                                <strong>{c.name}</strong> — Population:{" "}
                                {c.population.toLocaleString()}, Capital:{" "}
                                {c.capital || "N/A"}, Region: {c.region}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="row">
                    {countries.map((c) => (
                        <div key={c.name} className="col-md-4 mb-3">
                            <div className="card h-100">
                                <img
                                    src={c.flags.svg}
                                    className="card-img-top"
                                    alt={`Flag of ${c.name}`}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h2 className="card-title h5">{c.name}</h2>
                                    <p className="card-text">
                                        Population:{" "}
                                        {c.population.toLocaleString()}
                                        <br />
                                        Capital: {c.capital || "N/A"}
                                        <br />
                                        Region: {c.region}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

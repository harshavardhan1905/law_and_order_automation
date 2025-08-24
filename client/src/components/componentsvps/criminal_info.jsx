
import React, { useEffect, useState } from 'react'


export default function CriminalInfo() {
    const [search, setSearchArea] = useState("");
    const [criminal, setCriminal] = useState([]);
    const [data, setData] = useState([]);

    

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/api/get/criminal/data');
            const recs = await response.json();
            setData(recs)
            // setData(response.json())
            // console.log(response.json())
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data)

    const searchHandler = () => {
        const filterrecs = data.filter(item =>
            item.location.toLowerCase().includes(search)
        );
        setCriminal(filterrecs)
    }
    console.log("from criminal",criminal)


    // {data.map((i)=>{
    //     console.log(i.criminal_name)
    // })}
    // console.log(data)
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Law & Order Portal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>


            <div className="container mt-4">
                <h2 className="text-center text-primary">Criminal Data - Area Wise</h2>
                <p className="text-center text-muted">View registered criminal cases based on different areas</p>

                {/* <!-- Search by Area --> */}
                <div className="row mb-3">
                    <div className="col-md-6 offset-md-3">
                        <div className="position-relative">
                            <input
                                type="text"
                                id="searchArea"
                                name='searchArea'
                                className="form-control pe-5"
                                placeholder="Search by area name..."
                                value={search}
                                onChange={(e) => setSearchArea(e.target.value.toLowerCase())}
                            />
                            <div
                                className="position-absolute cursor-pointer top-50 end-0 translate-middle-y pe-3"
                                style={{ width: "40px", height: "32px", cursor: "pointer" }}
                                onClick={searchHandler}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="gray"
                                >
                                    <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Criminal Data Table --> */}
                <div className="table-responsive shadow bg-white p-3 rounded">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Criminal Name</th>
                                <th>Crime Type</th>
                                <th>Area</th>
                                <th>Date of Incident</th>
                            </tr>
                        </thead>
                        <tbody id="criminalTable">
                            {criminal.length > 0 ? (
                                criminal.map((i) => (
                                    <tr key={i.victim_id}>
                                        <td>{i.victim_id}</td>
                                        <td>{i.criminal_name}</td>
                                        <td>{i.criminal_type}</td>
                                        <td>{i.location}</td>
                                        <td>{new Date(i.date_of_incident).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}</td>
                                    </tr>
                                ))) : (data.map((i) => (
                                    <tr key={i.victim_id}>
                                        <td>{i.victim_id}</td>
                                        <td>{i.criminal_name}</td>
                                        <td>{i.criminal_type}</td>
                                        <td>{i.location}</td>
                                        <td>{new Date(i.date_of_incident).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}</td>

                                    </tr>
                                )))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

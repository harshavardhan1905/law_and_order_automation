import React, { useState, useEffect } from 'react';

export default function Complaints() {
  const [obj, setObj] = useState([]);

  const fetchData = async () => {
    try {
      const fetchComplaintes = await fetch('http://127.0.0.1:3001/api/get/complaints');
      const data = await fetchComplaintes.json();
      setObj(data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-4">Filed Complaints</h2>

      {obj.length === 0 ? (
        <div className="alert alert-info">No complaints filed yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Complaint ID</th>
                <th>Victim Name</th>
                <th>Criminal Name</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Location</th>
                <th>Date</th>
                <th>Evidence</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((i) => (
                <tr key={i.victim_id}>
                  <td>{i.victim_id}</td>
                  <td>{i.victim_name}</td>
                  <td>{i.criminal_name}</td>
                  <td>{i.criminal_type}</td>
                   <td>{i.description}</td>
                  <td>{i.location}</td>
                 
                  <td>
                    {new Date(i.date_of_incident).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                  </td>
                  <td>Submitted</td>
                  <td>pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

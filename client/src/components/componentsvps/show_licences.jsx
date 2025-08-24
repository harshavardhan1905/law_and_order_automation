import React, { useEffect, useState } from 'react';

export default function ShowLicences() {
  const [obj, setObj] = useState([]);

  // Example: Fetch data from API
  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/get/licences')
      .then(res => res.json())
      .then(data => setObj(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="table-responsive">
      <h2 className="text-primary fw-bold mb-4">Licences</h2>

      {obj.length === 0 ? (
        <div className="alert alert-info">No Licences  yet.</div>
      ) : (
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Applicant Name</th>
              <th>Contact</th>
              <th>Licence Type</th>
              <th>Address</th>
              <th>Purpose</th>
              <th>Attachments</th>
            </tr>
          </thead>
          <tbody>
            {obj.map((item, index) => (
              <tr key={index}>
                <td>{item.licence_id}</td>
                <td>{item.applicant_name}</td>
                <td>{item.contact}</td>
                <td>{item.application_type}</td>
                <td>{item.address}</td>
                <td>{item.purpose}</td>
                <td>
                  {item.attachments ? (
                    <a href={item.attachments} target="_blank" rel="noreferrer">
                      View
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

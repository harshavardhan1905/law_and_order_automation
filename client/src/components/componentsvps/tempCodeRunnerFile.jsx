import React, { useState, useEffect } from 'react'

export default function complaints() {
    const [obj, setObj] = useState([]);
    const fetchData = async () => {
      try{
        const fetchComplaintes = await fetch('http://127.0.0.1:3001/api/get/complaints');
      const data = await fetchComplaintes.json()
      setObj(data)
      console.log(obj)
      }
      catch(err){
        console.log("Error:", err)
      }
    }
    useEffect(() => {
            fetchData()
        }, []);
   
  return (
    
    <div>
        <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-4">Filed Complaints</h2>

     
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Complaint ID</th>
                <th>Victim Name</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Date Filed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{obj.victim_id}</td>
              </tr>
            </tbody>
          </table>
        </div>
     
    </div>
        
    </div>
  )
}

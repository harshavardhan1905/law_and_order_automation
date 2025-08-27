import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function officers_citizenpage({location}) {
    // console.log(location)
    console.log(location)
    const[officers, setOfficers] = useState([])
      const officersHandlers = async () =>{
       const response = await axios.post(`http://localhost:3001/api/officers/location`,
        {location}
       );
        const data = await response.json();
        setOfficers(data)
      }
      useEffect(() =>{
        officersHandlers();
      }, []);
      console.log(officers)
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    {/* <th>id</th> */}
                    <th>officer_id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>address</th>
                    <th>role</th>
                    <th>working</th>
                </tr>
            </thead>
            <tbody>
                {officers.map((item, index)=>(
                    <tr key={index}>
                    <td>{item.officer_id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.role}</td>
                    <td>{item.working}</td>
                    {/* <td></td> */}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

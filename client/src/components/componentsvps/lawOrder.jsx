import React, { useState, useEffect } from 'react';

const API_URL = "http://127.0.0.1:3001/api/law_order/contacts";

export default function LawOrderContacts({ department, location }) {
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}?location=${location}&department=${department}`);
            console.log(response); // Debug
            const data = await response.json();
            setContacts(data);
        } catch (err) {
            console.error("Failed to fetch contacts:", err);
        }
    };

    useEffect(() => {
        if (location && department) {
            fetchData();
        }
    }, [location, department]);

    return (
        <div className="container pt-2">
            <h3><strong>Law and Order</strong></h3>

            <ul className='list-group left-0 align-items-start'>
                <li className='list-group-item'><strong>Lease Agreement:</strong> The enforcement of the lease agreement will occur if the tenant fails to pay rent on time.</li>
                <li className='list-group-item'><strong>Employment Contract:</strong> The enforcement of the non-compete clause will prevent the employee from working with competitors for a specified period after leaving the company.</li>
                <li className='list-group-item'><strong>Sales Agreement:</strong> The enforcement of the sales agreement ensures that the buyer receives the product as described and on time.</li>
                <li className='list-group-item'><strong>Loan Agreement:</strong> In case of default, the enforcement of the loan agreement allows the lender to take legal action to recover the owed amount.</li>
                <li className='list-group-item'><strong>Partnership Agreement:</strong> The enforcement of the partnership agreement requires all partners to adhere to the agreed-upon responsibilities and profit-sharing terms.</li>
                <li className='list-group-item'><strong>Service Contract:</strong> The enforcement of the service contract means that the service provider must deliver the agreed services as outlined in the document.</li>
                <li className='list-group-item'><strong>Confidentiality Agreement:</strong> The enforcement of the confidentiality agreement protects sensitive information from being disclosed to unauthorized parties.</li>
                <li className='list-group-item'><strong>Construction Contract:</strong> The enforcement of the construction contract ensures that the project is completed according to the specified standards and timelines.</li>
            </ul>

            <div className='align-items-center mt-4 justify-items-left'>
                <h3 className=''>Contact for Help</h3>
            </div>
            <table className='table table-bordered table-hover table-striped align-middle shadow'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((i) => (
                            <tr key={i.id}>
                                <td className=''>{i.id}</td>
                                <td>{i.location}</td>
                                <td>{i.name}</td>
                                <td>{i.contact}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No contact data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* <p><strong>Selected Department:</strong> {department}</p>
            <p><strong>Selected Location:</strong> {location}</p> */}
        </div>
    );
}

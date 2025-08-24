import React from 'react'

export default function cyberCrime() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Cyber Crime Awareness</a>
        </div>
      </nav>

      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">Stay Safe Online</h1>
          <p className="lead">Learn how to protect yourself from cyber threats and report suspicious activities.</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <img src="https://cdn.pixabay.com/photo/2017/01/31/19/00/hacker-2026644_960_720.png" className="img-fluid rounded" alt="Cyber Security" />
          </div>
          <div className="col-md-6">
            <h3>What is Cyber Crime?</h3>
            <p>Cybercrime refers to illegal activities carried out using computers or the internet. It includes phishing, identity theft, cyberbullying, online scams, hacking, and more.</p>
            <p>Raising awareness can help prevent such crimes and protect people from becoming victims.</p>
          </div>
        </div>

        <h3 className="mb-4">Top Safety Tips</h3>
        <ul className="list-group mb-5">
          <li className="list-group-item">🔒 Use strong, unique passwords for all accounts.</li>
          <li className="list-group-item">📧 Avoid clicking on unknown links or downloading suspicious attachments.</li>
          <li className="list-group-item">🔐 Enable two-factor authentication wherever possible.</li>
          <li className="list-group-item">🚫 Never share personal or financial information publicly online.</li>
          <li className="list-group-item">👁️ Keep your software and antivirus updated regularly.</li>
        </ul>

        <div className="alert alert-warning text-center" role="alert">
          <strong>Report Cyber Crimes:</strong> If you are a victim, immediately report to your nearest cyber cell or use the national cyber crime portal.
        </div>

        <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name (Optional)</label>
              <input type="text" className="form-control" name="victim_name" id="victim_name" placeholder="Enter your name (if comfortable)" />
            </div>
            <div className="mb-3">
              <label htmlFor="victim_contact" className="form-label">Your Contact</label>
              <input type="text" className="form-control" name="victim_contact" id="victim_contact" placeholder="Enter your contact" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" name='victim_location' id="victim_location" placeholder="Incident location" required />
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">Incident Details</label>
              <textarea className="form-control" name='victim_description' id="victim_description" rows="4" placeholder="Describe the incident..." required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit Report</button>
          </form>
      </div>
    </div>
  )
}

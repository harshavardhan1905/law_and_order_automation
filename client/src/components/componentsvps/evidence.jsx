import React from 'react'

export default function Evidence() {

  return (
    <div>
        <div className="container mt-4">
      <h2 className="mb-4 text-center">Submit Evidence</h2>
      <form  className="border p-4 rounded bg-light">
        
        {/* Evidence Title */}
        <div className="mb-3">
          <label className="form-label">Evidence Title</label>
          <input
            type="text"
            className="form-control"
            name="evidenceTitle"
            placeholder="Enter evidence title"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <select name="" id="" className='form-control'>

            <option value="Choose case ID" default>Choose case ID</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label className="form-label">Upload File</label>
          <input
            type="file"
            className="form-control"
            name="file"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit Evidence
        </button>
      </form>
    </div>
    </div>
  )
}

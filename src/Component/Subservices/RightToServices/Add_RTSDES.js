import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Add_RTSDES() {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to server
    console.log('Heading:', heading);
    console.log('Description:', description);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/rts">Right to Service</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Right to Service
          </li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Right to Service</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Heading Field */}
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Heading <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Description Field */}
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Description <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_RTSDES;

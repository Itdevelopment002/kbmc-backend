import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Add_RTS() {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to server
    console.log('Description:', description);
    console.log('Uploaded File:', file);
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
                  <div className="form-group row mt-3" >
                    <label className="col-form-label col-lg-2">Upload PDF <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <div className="input-group mb-3 ">
                        <input
                          type="file"
                          id="userfile"
                          name="userfile"
                          className="form-control col-md-12 col-xs-12 userfile"
                          onChange={handleFileChange}
                        />
                      </div>
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

export default Add_RTS;

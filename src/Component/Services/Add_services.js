


import React, { useState } from 'react';




const Add_services = () => {
  const [serviceHeading, setServiceHeading] = useState('');
  const [mainIcon, setMainIcon] = useState(null);
  const [hoverIcon, setHoverIcon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to the server
    console.log({ serviceHeading, mainIcon, hoverIcon });
  };

  return (
    <div className="page-wrapper">
     
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.php">Home</a></li>
          <li className="breadcrumb-item"><a href="services.php">Services</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Services</li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Services</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Service Heading <span className="text-danger">*</span></label>
                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        value={serviceHeading}
                        onChange={(e) => setServiceHeading(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Service Icon (Main Icon) <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <input 
                          type="file"
                          className="form-control"
                          onChange={(e) => setMainIcon(e.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Service Icon (Hover Icon) <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setHoverIcon(e.target.files[0])}
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
};

export default Add_services;

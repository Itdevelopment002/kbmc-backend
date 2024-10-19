import React, { useState } from 'react';

function Add_electedwings() {
  // State variables for form fields
  const [correspondentName, setCorrespondentName] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [correspondentImage, setCorrespondentImage] = useState(null);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log or submit form data
    console.log({
      correspondentName,
      wardNo,
      startDate,
      endDate,
      mobileNo,
      correspondentImage,
    });
  };

  // Handling file upload
  const handleFileChange = (e) => {
    setCorrespondentImage(e.target.files[0]);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">About KBMC</a></li>
          <li className="breadcrumb-item"><a href="/elected-wings">Elected Wings</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Correspondent</li>
        </ol>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Correspondent</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row mt-3">
                    <label className="col-form-label col-md-2">Correspondent Name <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Correspondent's Name"
                        value={correspondentName}
                        onChange={(e) => setCorrespondentName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-3">
                    <label className="col-form-label col-md-2">Ward No. <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Ward Number"
                        value={wardNo}
                        onChange={(e) => setWardNo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-3">
                    <label className="col-form-label col-md-2">Start Date <span className="text-danger">*</span></label>
                    <div className="cal-icon col-md-4">
                      <input
                        className="form-control"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-3">
                    <label className="col-form-label col-md-2">End Date <span className="text-danger">*</span></label>
                    <div className="cal-icon col-md-4">
                      <input
                        className="form-control"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-3">
                    <label className="col-form-label col-md-2">Mobile No. <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Mobile Number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row my-3">
                    <label className="col-form-label col-lg-2">Upload Correspondent Image</label>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          id="userfile"
                          name="userfile"
                          className="form-control"
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

export default Add_electedwings;

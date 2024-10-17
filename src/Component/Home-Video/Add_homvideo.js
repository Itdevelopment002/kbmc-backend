import React from 'react';


const Add_homvideo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="page-wrapper">
      
    
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/index">Home</a></li>
          <li className="breadcrumb-item"><a href="/home-video">Home Video</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Home Video</li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Home Video</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Home Video Description <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <input type="text" className="form-control form-control-lg" placeholder="" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Publish Date <span className="text-danger">*</span></label>
                    <div className="cal-icon col-md-4 mb-3">
                      <input className="form-control datetimepicker" type="date" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Upload Home Video <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <input type="file" id="userfile" name="userfile" className="form-control" required />
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

export default Add_homvideo;

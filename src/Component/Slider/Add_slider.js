import React, { useState } from 'react';


import { Link } from 'react-router-dom';

const Add_slider = () => {
  const [sliderName, setSliderName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and file upload logic
    console.log('Slider Name:', sliderName);
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/slider">Slider</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Slider
          </li>
        </ol>

        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Slider</h4>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Slider Name</label>
                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={sliderName}
                        onChange={(e) => setSliderName(e.target.value)}
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Upload Image</label>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          id="userfile"
                          name="userfile"
                          className="form-control col-md-12 col-xs-12"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>

                  <input type="submit" className="btn btn-primary" value="Upload" />
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_slider;

import React, { useState } from 'react';

const AddPropertyHolder = () => {
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    property: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/city-profile">City Profile</a></li>
          <li className="breadcrumb-item"><a href="/property-holder">Property Holder</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Property Holder</li>
        </ol>

        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Property Holder</h4>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Heading</label>
                    <div className="col-md-5 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        placeholder="Enter heading"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Description <span className="text-danger">*</span></label>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Property <span className="text-danger">*</span></label>
                    <div className="col-md-5 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        placeholder="Enter property details"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-8 offset-md-3">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyHolder;

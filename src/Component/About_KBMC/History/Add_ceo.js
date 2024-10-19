// src/components/AddCeo.js
import React, { useState } from 'react';

const AddCeo = () => {
    const [formData, setFormData] = useState({
        coName: '',
        designation: '',
        email: '',
        coImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, coImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.php">About KBMC</a></li>
                    <li className="breadcrumb-item"><a href="history.php">History</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add CO</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add CO</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">CO Name <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="coName"
                                                value={formData.coName}
                                                onChange={handleChange}
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-md-2">Designation <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleChange}
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-md-2">Email Id <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row my-3">
                                        <label className="col-form-label col-lg-2">Upload CO Image</label>
                                        <div className="col-md-4">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="file"
                                                    id="userfile"
                                                    name="coImage"
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
};

export default AddCeo;

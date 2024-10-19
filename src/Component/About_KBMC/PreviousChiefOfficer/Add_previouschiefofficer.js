import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add_previouschiefofficer = () => {
    // State variables for form fields
    const [officerName, setOfficerName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [officerImage, setOfficerImage] = useState(null);

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log or submit form data
        console.log({
            officerName,
            startDate,
            endDate,
            officerImage,
        });
    };

    // Handling file upload
    const handleFileChange = (e) => {
        setOfficerImage(e.target.files[0]);
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/about-kbmc">About KBMC</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/previous-officer">Previous Chief Officers of the Council</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Add Officer
                    </li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Officer</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">
                                            Officer Name <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Officer's Name"
                                                value={officerName}
                                                onChange={(e) => setOfficerName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-md-2">
                                            Start Date <span className="text-danger">*</span>
                                        </label>
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
                                        <label className="col-form-label col-md-2">
                                            End Date <span className="text-danger">*</span>
                                        </label>
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
                                        <label className="col-form-label col-lg-2">
                                            Upload Officer Image
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-4 mb-3">
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
};

export default Add_previouschiefofficer;

import React, { useState } from "react";

// Function component for Add Functions page
const AddFunction = () => {
    // State to manage the form inputs
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to submit form data
        console.log("Heading:", heading);
        console.log("Description:", description);

        // Perform the submission here (e.g., using fetch or axios to send data to the backend)
    };

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/about-kbmc">About KBMC</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/functions">Functions</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Add Functions
                        </li>
                    </ol>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Add Functions</h4>
                                        </div>
                                    </div>

                                    {/* Form Section */}
                                    <form onSubmit={handleSubmit}>
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
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3">
                                            <label className="col-form-label col-lg-2">Description<span className="text-danger">*</span></label>
                                            <div className="col-md-4">
                                                <textarea
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    rows="2"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="Submit"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFunction;

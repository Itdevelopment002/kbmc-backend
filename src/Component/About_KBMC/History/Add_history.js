import React, { useState } from 'react';

const Add_history = () => {
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log("Description submitted:", description);
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add History</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add History</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-md-2">Description <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="description"
                                                value={description}
                                                onChange={handleChange}
                                                placeholder="Enter description"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row ">
                                        <div className="col-md-4 md-2 my-3">
                                            <input type="submit" className="btn btn-primary" value="Submit" />
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

export default Add_history;

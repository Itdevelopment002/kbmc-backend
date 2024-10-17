import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add_tender = () => {
    const [tenderDescription, setTenderDescription] = useState('');
    const [isNew, setIsNew] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic (e.g., API call)
        console.log('Tender Description:', tenderDescription);
        console.log('Status New:', isNew);
        // Reset the form
        setTenderDescription('');
        setIsNew(false);
    };

    return (
        <div className="page-wrapper">
      
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/tender">Tender</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Tender</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Tender</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3 mb-3">
                                            Tender Description <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder=""
                                                value={tenderDescription}
                                                onChange={(e) => setTenderDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3 mt-3">
                                            Status <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-3 mt-3 mb-3">
                                            <div className="checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={isNew}
                                                        onChange={() => setIsNew(!isNew)}
                                                    />{' '}
                                                    New
                                                </label>
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

export default Add_tender;

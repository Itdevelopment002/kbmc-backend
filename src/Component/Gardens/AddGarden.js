import React from 'react';
import { Link } from 'react-router-dom';

const AddGardens = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">City Profile</Link></li>
                    <li className="breadcrumb-item"><Link to="/gardens">Gardens</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Gardens</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Gardens</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3">Heading <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <input type="text" className="form-control form-control-lg mb-3" placeholder="" required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-lg-3">Upload Garden Photos</label>
                                        <div className="col-md-5">
                                            <div className="input-group mb-3">
                                                <input type="file" id="userfile" name="userfile" className="form-control col-md-12 col-xs-12 userfile" />
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

export default AddGardens;

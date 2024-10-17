import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Add_news = () => {
    const [newsDescription, setNewsDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic (e.g., API call)
        console.log('News Description:', newsDescription);
        // Reset the form
        setNewsDescription('');
    };

    return (
        <div className="page-wrapper">
          
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/news">News Update</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add News</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add News</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">News Description <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input 
                                                type="text" 
                                                className="form-control form-control-lg" 
                                                placeholder="" 
                                                value={newsDescription} 
                                                onChange={(e) => setNewsDescription(e.target.value)} 
                                            />
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

export default Add_news;

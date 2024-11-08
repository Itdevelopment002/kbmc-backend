import React, {useState} from "react";
import api from "../api"
import {useNavigate} from "react-router-dom"

const AddUsers = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    department: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/users', formData);
      console.log('User added:', response.data);
      setSuccess(true); // Show success message
      navigate('/user'); // Redirect to the user list or desired route after success
    } catch (error) {
      console.error('There was an error adding the user:', error);
      setError('Error adding user. Please try again.'); // Show error message
    }
  };

  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="/user">User</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add User
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add User</h4>
                    </div>
                  </div>
                  <form action="#">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>User Name</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Password</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Type of Dapartment</label>
                          <select class="form-control">
                            <option>Account Department</option>
                            <option>Tax Department</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Password</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Submit"
                    />
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

export default AddUsers;

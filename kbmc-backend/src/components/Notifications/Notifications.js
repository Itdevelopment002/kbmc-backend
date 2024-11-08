import React from "react";

const Notifications = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Notifications
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Notifications</h4>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="8%">Sr. No.</th>
                          <th>Notification Description</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>Tax Department Added New Content</td>
                          <td>29 June 2024</td>
                          <td>01:20:30 PM</td>
                          <td>
                            <a href="#." class="btn btn-success btn-sm m-t-10">
                              Approve
                            </a>{" "}
                            <a
                              href="#."
                              data-toggle="modal"
                              data-target="#deleteModal"
                              class="btn btn-danger btn-sm m-t-10"
                            >
                              Disapprove
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>Tax Department Added New Content</td>
                          <td>29 June 2024</td>
                          <td>01:20:30 PM</td>
                          <td>
                            <a href="#." class="btn btn-success btn-sm m-t-10">
                              Approve
                            </a>{" "}
                            <a
                              href="#."
                              data-toggle="modal"
                              data-target="#deleteModal"
                              class="btn btn-danger btn-sm m-t-10"
                            >
                              Disapprove
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>Tax Department Added New Content</td>
                          <td>29 June 2024</td>
                          <td>01:20:30 PM</td>
                          <td>
                            <a href="#." class="btn btn-success btn-sm m-t-10">
                              Approve
                            </a>{" "}
                            <a
                              href="#."
                              data-toggle="modal"
                              data-target="#deleteModal"
                              class="btn btn-danger btn-sm m-t-10"
                            >
                              Disapprove
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  2 <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>

          <div
            class="modal delete_modal fade text-center"
            id="deleteModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <h4>Are you sure you want to delete this item?</h4>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-danger btn-lg">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

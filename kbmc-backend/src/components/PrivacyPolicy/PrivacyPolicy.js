import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#.">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Privacy Policy</h4>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Description</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>
                            Kulgaon Badlapur city is just 55 km east from
                            Mumbai. is sitting at a distance. Naturally Badlapur
                            city is famous for its human friendly environment,
                            clean water, pollution free environment etc. Due to
                            this, thousands of families have migrated from
                            Mumbai to Badlapur. Another main reason is that due
                            to the planned development brought about by Badlapur
                            Municipal Council, the name of Badlapur Municipal
                            Council is being taken with great respect today.
                            Various projects implemented by the municipal
                            council for the service of the citizens and to
                            maintain the balance of nature have been honored by
                            the President of the country. All his credit goes to
                            the first citizen of the city Hon. Mayor, Mr. The
                            chief officer, all the members of the party have
                            unitedly cooperated for the development of the city
                            and the support given by the citizens of the city.
                          </td>
                          <td>
                            <a
                              href="#."
                              data-toggle="modal"
                              data-target="#deleteModal"
                              class="btn btn-danger btn-sm m-t-10"
                            >
                              Delete
                            </a>{" "}
                            <a
                              href="edit-privacy-policy.php"
                              class="btn btn-success btn-sm m-t-10"
                            >
                              Edit
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

export default PrivacyPolicy;

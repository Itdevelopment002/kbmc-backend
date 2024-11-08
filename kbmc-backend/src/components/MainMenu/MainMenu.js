import React from 'react'

const MainMenu = () => {
  return (
    <div>
        <div class="page-wrapper">
    <div class="content">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Main Menu</li>
            </ol>
        </nav>
		<div class="row">
            <div class="col-lg-12">
                <div class="card-box">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-4 col-3">
                                <h4 class="page-title">Main Menu</h4>
                            </div>
                            <div class="col-sm-8 col-9 text-right m-b-20">
                                <a href="add-main-menu.php" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Main Menu</a>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered m-b-0">
                                <thead>
                                    <tr>
                                        <th width="10%">Sr. No.</th>
                                        <th>Main Menu</th>
                                        <th>Sub Menu</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Home</td>
                                        <td>-</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="9">02</td>
                                        <td rowspan="9">About KBMC</td>
                                        <td>History</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Wards</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Elected Wing</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Organization Structure</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Functions</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Departments</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Previous Chief officer</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Previous President</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Awards</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="11">03</td>
                                        <td rowspan="11">City Profile</td>
                                        <td>Areas</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Property Holder</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Muncipal Properties</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Schools</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Electric</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Roads</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Tree Census</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Health</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Ponds / Talao</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Fire Station</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Private Hospital</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="6">04</td>
                                        <td rowspan="6">Online Services</td>
                                        <td>Property Tax Payemnt</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Property Tax Receipt</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Water Tax Payment</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Birth & Death Search</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Online Tenders</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
                                    </tr>
                                    <tr>
                                        <td>Auto DCR</td>
                                        <td><a href="#." data-toggle="modal" data-target="#deleteModal" class="btn btn-danger btn-sm m-t-10">Delete</a> <a href="#." class="btn btn-success btn-sm m-t-10">Edit</a></td>
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
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
        <div class="modal delete_modal fade text-center" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h4>Are you sure you want to delete this item?</h4>
              </div>
              <div class="modal-footer text-center">
                <button type="button" class="btn btn-primary btn-lg" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger btn-lg">Delete</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default MainMenu
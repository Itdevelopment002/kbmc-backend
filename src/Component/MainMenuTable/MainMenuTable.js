import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MainMenuTable = () => {
  const [menuData, setMenuData] = useState([
    { id: 1, mainMenu: 'Home', subMenu: '-' },
    { id: 2, mainMenu: 'About KBMC', subMenu: ['History', 'Wards', 'Elected Wing', 'Organization Structure', 'Functions'] }
  ]);

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [menuToDelete, setMenuToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Edit functionality
  const handleEditClick = (menu) => {
    setSelectedMenu(menu);
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    if (!selectedMenu.mainMenu || (Array.isArray(selectedMenu.subMenu) && selectedMenu.subMenu.length === 0)) {
      alert("Please fill in both fields.");
      return;
    }

    setMenuData((prevData) =>
      prevData.map((item) =>
        item.id === selectedMenu.id ? selectedMenu : item
      )
    );
    setShowEditModal(false);
  };

  // Delete functionality
  const handleDeleteClick = (menu) => {
    setMenuToDelete(menu);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setMenuData(menuData.filter((item) => item.id !== menuToDelete.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.php">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Main Menu</li>
            </ol>
          </nav>
      <h4>Main Menu</h4>
      <div className="text-end mb-3">
        <Link to="/add-main">
          <button className="btn btn-primary">+ Add Main Menu</button>
        </Link>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Main Menu</th>
            <th>Sub Menu</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.mainMenu}</td>
              <td>
                {Array.isArray(item.subMenu) ? (
                  <ul>
                    {item.subMenu.map((sub, idx) => (
                      <li key={idx}>{sub}</li>
                    ))}
                  </ul>
                ) : (
                  item.subMenu
                )}
              </td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => handleDeleteClick(item)}>
                  Delete
                </button>
                <button className="btn btn-success" onClick={() => handleEditClick(item)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {selectedMenu && (
        <div className={`modal fade ${showEditModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Menu</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Main Menu</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedMenu.mainMenu}
                      onChange={(e) =>
                        setSelectedMenu({
                          ...selectedMenu,
                          mainMenu: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Sub Menu</label>
                    <input
                      type="text"
                      className="form-control"
                      value={Array.isArray(selectedMenu.subMenu) ? selectedMenu.subMenu.join(', ') : selectedMenu.subMenu}
                      onChange={(e) =>
                        setSelectedMenu({
                          ...selectedMenu,
                          subMenu: e.target.value.split(',').map((item) => item.trim()),
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {menuToDelete && (
        <div className={`modal fade ${showDeleteModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the menu "{menuToDelete.mainMenu}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenuTable;

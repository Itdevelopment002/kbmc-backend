import React from 'react';

const MainMenuTable = () => {
  const menuData = [
    { id: 1, mainMenu: 'Home', subMenu: '-' },
    { id: 2, mainMenu: 'About KBMC', subMenu: ['History', 'Wards', 'Elected Wing', 'Organization Structure', 'Functions'] }
  ];

  return (
    <div className="container mt-4">
      <h4>Main Menu</h4>
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
                <button className="btn btn-danger me-2">Delete</button>
                <button className="btn btn-success">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary">+ Add Main Menu</button>
    </div>
  );
};

export default MainMenuTable;

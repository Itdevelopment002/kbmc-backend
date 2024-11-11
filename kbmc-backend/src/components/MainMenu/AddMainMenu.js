import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const AddMainMenu = () => {
  const initialMenuItems = [
    { mainMenu: "", subMenus: [{ subMenu: "", subLink: "" }] },
  ];
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/add-main-menu", { menuItems });
      navigate("/");
      setMenuItems(initialMenuItems);
    } catch (err) {
      console.error(
        err.response ? err.response.data.message : "An error occurred."
      );
    }
  };

  const handleAddMoreSubMenu = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].subMenus.push({ subMenu: "", subLink: "" });
    setMenuItems(newMenuItems);
  };

  const handleInputChange = (index, field, value) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index][field] = value;
    setMenuItems(newMenuItems);
  };

  const handleSubMenuChange = (index, subIndex, field, value) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].subMenus[subIndex][field] = value;
    setMenuItems(newMenuItems);
  };

  const handleDeleteSubMenu = (index, subIndex) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].subMenus.splice(subIndex, 1);
    setMenuItems(newMenuItems);
  };

  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/">Main Menu</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Main Menu
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Main Menu</h4>
                    </div>
                    <div class="col-sm-8 col-9 text-right m-b-20">
                      <button
                        onClick={() =>
                          handleAddMoreSubMenu(menuItems.length - 1)
                        }
                        class="btn btn-primary float-right"
                      >
                        <i class="fa fa-plus"></i> Add Sub menu
                      </button>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {menuItems.map((item, index) => (
                      <div key={index}>
                        <div className="form-group row">
                          <label className="col-form-label col-md-2">
                            Main Menu <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-4">
                            <input
                              type="text"
                              placeholder="Enter Main menu name"
                              className="form-control form-control-md"
                              value={item.mainMenu}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "mainMenu",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        {item.subMenus.map((subMenu, subIndex) => (
                          <div className="form-group row" key={subIndex}>
                            <label className="col-form-label col-md-2">
                              Sub Menu <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-3">
                              <input
                                type="text"
                                placeholder="Enter Sub menu name"
                                className="form-control form-control-md m-t-10"
                                value={subMenu.subMenu}
                                onChange={(e) =>
                                  handleSubMenuChange(
                                    index,
                                    subIndex,
                                    "subMenu",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-3">
                              <input
                                type="text"
                                placeholder="Enter Sub menu link"
                                className="form-control form-control-md m-t-10"
                                value={subMenu.subLink}
                                onChange={(e) =>
                                  handleSubMenuChange(
                                    index,
                                    subIndex,
                                    "subLink",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-1">
                              <button
                                type="button"
                                className="btn btn-danger m-t-10"
                                onClick={() =>
                                  handleDeleteSubMenu(index, subIndex)
                                }
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    <input
                      type="submit"
                      class="btn btn-primary btn-sm"
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

export default AddMainMenu;

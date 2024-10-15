import React from 'react';


import Sidebar from '../Sidebar/Sidebar';
import MainMenuTable from '../MainMenuTable/MainMenuTable';

import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <div className="d-flex">
     <Sidebar />
      <div className="flex-grow-1">
      <Header />
        <div className="p-4">
          <MainMenuTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

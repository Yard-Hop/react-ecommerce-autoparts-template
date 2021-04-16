import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div id="sidebar">

    <div className="sidebar__menu" data-testid="sidebar">
      <div className="sidebar__link active_menu_link">
        <Link to="/dashboard" data-testid="sidebar-dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/newProduct" data-testid="sidebar-new-listing">
          <p>New Listing</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/inventory" data-testid="sidebar-inventory">
          <p>Inventory</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/purchases" data-testid="sidebar-purchases">
          <p>Purchases</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/messages" data-testid="sidebar-messages">
          <p>Messages</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/settings" data-testid="sidebar-settings">
          <p>Settings</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Sidebar;

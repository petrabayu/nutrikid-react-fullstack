import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import EventTab from "../../Components/Dashboard/EventTab"
import UserTab from '../../Components/Dashboard/UserTab';

const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>

      <Nav variant="tabs" defaultActiveKey={activeTab} className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="users" onClick={() => setActiveTab('users')}>
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="events" onClick={() => setActiveTab('events')}>
            Events
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === 'users' && (
        <div>
          <UserTab />
        </div>
      )}

      {activeTab === 'events' && (
        <div>
          {/* Add content for the Events tab as needed */}
          <EventTab />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

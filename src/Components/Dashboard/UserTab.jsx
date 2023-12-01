import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    roles: "",
    phoneNumber: "",
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "user1@example.com",
      name: "User 1",
      roles: "Doctor",
      phoneNumber: "123-456-7890",
    },
    {
      id: 2,
      email: "user2@example.com",
      name: "User 2",
      roles: "Doctor",
      phoneNumber: "987-654-3210",
    },
  ]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    // Add validation or additional logic
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser },
    ]);
    setNewUser({ email: "", name: "", roles: "", phoneNumber: "" });
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#B4E1FF", color: "#000" }}
        onClick={handleShow}
        className="mb-3"
      >
        Add User
      </Button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Roles</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.roles}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRoles">
              <Form.Label>Roles</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roles"
                name="roles"
                value={newUser.roles}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={newUser.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserTab;

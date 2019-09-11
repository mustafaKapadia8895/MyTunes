import React, { useEffect } from "react";
import { Container, Header, Icon, Table } from "semantic-ui-react";

const AdminConsoleComponent = ({
  users,
  getAllUsers,
  sessionId,
  deleteUser,
  errorMessage
}) => {
  useEffect(() => {
    getAllUsers(sessionId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(users);
  return (
    <Container>
      {errorMessage ? (
        <Header as="h1" className="text-white mt-5 ">
          {errorMessage}
        </Header>
      ) : (
        <>
          <Header as="h1" className="text-white mt-5 ">
            Admin Console
          </Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {users.map(user => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.firstName}</Table.Cell>
                  <Table.Cell>{user.password}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon
                      name="user delete"
                      onClick={event => deleteUser(sessionId, user.id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </Container>
  );
};

export default AdminConsoleComponent;

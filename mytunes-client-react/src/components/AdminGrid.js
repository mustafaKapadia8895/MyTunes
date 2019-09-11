import React from "react";
import { Icon, List } from "semantic-ui-react";

const AdminGrid = ({ users }) => {
  return (
    <List size="large" verticalAlign="middle" inverted animated selection>
      {users.map((user, index) => (
        <List.Item className="p-3 d-flex justify-content-between">
          <div className="row col">
            <div className="my-auto">
              <Icon name="user" className="" />
            </div>
            <div className="col">
              <List.Content>
                <List.Header>{user.username}</List.Header>
                <List.Description>
                  {user.firstName} {user.lastName}
                </List.Description>
              </List.Content>
            </div>
          </div>
          <div className="col-4 col-md-3 col-xl-2">
            <List.Content />
          </div>
        </List.Item>
      ))}
    </List>
  );
};

export default AdminGrid;

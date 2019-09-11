import React from "react";
import { Form } from "semantic-ui-react";

const ProfileGrid = ({ profile }) => {
  return (
    // <List size="large" verticalAlign="middle">
    //   <ListItem>
    //     <ListHeader className="text-white">Username</ListHeader>
    //     <ListContent>{profile.username}</ListContent>
    //   </ListItem>
    //   {/* <ListItem>
    //     <ListHeader className="text-white">Password</ListHeader>
    //     <ListContent>{profile.password}</ListContent>
    //   </ListItem> */}
    //   <ListItem>
    //     <ListHeader className="text-white">First Name</ListHeader>
    //     <ListContent>{profile.firstName}</ListContent>
    //   </ListItem>
    //   <ListItem>
    //     <ListHeader className="text-white">Last Name</ListHeader>
    //     <ListContent>{profile.lastName}</ListContent>
    //   </ListItem>
    // </List>
    <Form inverted>
      <Form.Group unstackable className="text-white">
        <Form.Input
          className="text-white"
          label="Username"
          value={profile.username}
          readOnly
          width={"16"}
        />
        <Form.Input
          className="text-white"
          label="First Name"
          value={profile.firstName}
          readOnly
          width={"16"}
        />
        <Form.Input
          className="text-white"
          label="Last Name"
          readOnly
          value={profile.lastName}
          width={16}
        />
      </Form.Group>
    </Form>
    // <List
    //   horizontal
    //   relaxed
    //   className="d-flex mt-3 justify-content-between wbdv-browse-options "
    //   size="huge"
    // >
    //   <List.Item>
    //     <List.Content>
    //       <List.Header className="text-white text-center">
    //         {profile.username}
    //       </List.Header>
    //       <List.Description className="text-white">Username</List.Description>
    //     </List.Content>
    //   </List.Item>
    //   <List.Item>
    //     <List.Content>
    //       <List.Header className="text-white text-center">
    //         {profile.firstName}
    //       </List.Header>
    //       <List.Description className="text-white">First Name</List.Description>
    //     </List.Content>
    //   </List.Item>
    //   <List.Item>
    //     <List.Content>
    //       <List.Header className="text-white text-center">
    //         {profile.lastName}
    //       </List.Header>
    //       <List.Description className="text-white">Last Name</List.Description>
    //     </List.Content>
    //   </List.Item>
    // </List>
  );
};

export default ProfileGrid;

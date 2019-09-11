import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
const SidebarContainer = () => {
  return (
    <Sidebar as={Menu} icon="labeled" inverted vertical visible>
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="search" />
        Search
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarContainer;

import React from "react";
import { List } from "semantic-ui-react";

const BrowseOptions = ({ buttonTriggered, selectedButton }) => {
  return (
    <div>
      <List
        horizontal
        relaxed
        className="d-flex mt-3 justify-content-center wbdv-browse-options"
        size="huge"
      >
        <List.Item
          onClick={event => {
            if (selectedButton !== "Featured") buttonTriggered("Featured");
          }}
        >
          <List.Content>
            <List.Header as={"a"}>
              Featured
              {selectedButton === "Featured" && (
                <div className="wbdv-browse-border" />
              )}
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item
          className="d-none d-md-block"
          onClick={event => {
            if (selectedButton !== "Charts") buttonTriggered("Charts");
          }}
        >
          <List.Content>
            <List.Header as="a">
              Charts
              {selectedButton === "Charts" && (
                <div className="wbdv-browse-border" />
              )}
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item
          className="d-none d-md-block"
          onClick={event => {
            if (selectedButton !== "New Releases")
              buttonTriggered("New Releases");
          }}
        >
          <List.Content>
            <List.Header as="a">
              New Releases
              {selectedButton === "New Releases" && (
                <div className="wbdv-browse-border" />
              )}
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default BrowseOptions;

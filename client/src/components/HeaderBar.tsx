import React from "react";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { TextField, IconButton } from "@material-ui/core";
import { Header } from "semantic-ui-react";

import "./HeaderBar.css";

function HeaderBar() {
  return (
    <Header className="header">
      <h1 className="headerTitle">WetBat Travel</h1>
      <div className="actionItemsContainer">
        <div className="searchBarContainer">
          <TextField
            className="searchBar"
            InputProps={{
              startAdornment: <SearchRoundedIcon className="searchIcon" />,
            }}
            variant="outlined"
            size="small"
          />
        </div>
        <IconButton size="small" className="iconButton">
          <NotificationsRoundedIcon className="icon" />
        </IconButton>
        <IconButton size="small">
          <ChatBubbleRoundedIcon className="icon" />
        </IconButton>
        <IconButton size="small">
          <SettingsRoundedIcon className="icon" />
        </IconButton>
        <IconButton size="small">
          <AccountCircleRoundedIcon className="icon" />
        </IconButton>
      </div>
    </Header>
  );
}

export default HeaderBar;

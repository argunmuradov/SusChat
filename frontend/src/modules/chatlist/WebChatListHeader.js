import React from "react";
import {
  GRAY,
  TEXT_TITLE,
  HEADER_COLOR,
  MENU_GRAY,
  BLACK
} from "../../utils/webColors";
import { Avatar } from '@mui/material';
import { Add } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

const WebChatListHeader = ({ onChatAdd, userName }) => {
  const styles = useStyles();

  return (
    <div className={styles.parentView}>
      <div style={{ width: "50%" ,color: "white", margin: "5%" }}>
        {userName.toUpperCase()}'s chat hub
      </div>
      <div
        style={{
          width: "30%",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      />
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
          marginRight: -34
        }}
      >
        <Add onClick={onChatAdd} className={styles.chatIcons} />
      </div>
    </div>
  );
};

export default WebChatListHeader;

const useStyles = makeStyles(theme => ({
  parentView: {
    backgroundColor: BLACK,
    width: "100%",
    height: "8%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: 0
  },
  backIcon: {
    justifyContent: "center",
    height: "100%",
    alignSelf: "center",
    color: TEXT_TITLE
  },
  profileIcon: {
    width: 40,
    height: 40,
    alignSelf: "center"
  },
  userName: {
    fontSize: 16,
    color: TEXT_TITLE
  },
  userMessage: {
    fontSize: 12,
    color: GRAY
  },
  menuIcons: {
    width: 24,
    height: 24,
    color: MENU_GRAY,
    marginLeft: "15%",
    alignSelf: "center",
    cursor: 'pointer'
  },
  chatIcons: {
    width: 22,
    height: 22,
    color: MENU_GRAY,
    marginLeft: "15%",
    alignSelf: "center",
    cursor: 'pointer'
  }
}));

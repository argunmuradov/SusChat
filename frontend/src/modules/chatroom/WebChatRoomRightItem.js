import React from "react";
import {
  GRAY,
  WHITE,
  LIGHT_GREEN,
  TEXT_TITLE
} from "../../utils/webColors";
import { getTimeInFormat } from "../../utils/webHelperFunctions";
import { Card, Typography } from "@mui/material";

const ChatRoomRightItem = ({ item, styleList }) => {
  return (
    <div style={Object.assign({}, styles.parentView, styleList)}>
      <Card style={styles.cardView}>
        <Typography style={styles.userMessage}>{JSON.parse(item).MessageBody}</Typography>
        <Typography style={styles.userTime}>
          {getTimeInFormat(item.chatTime)}
        </Typography>
      </Card>
    </div>

  );
};

export default ChatRoomRightItem;

const styles = {
  parentView: {
    maxWidth: "60%",
    width: "100%",
    right: 0,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    flexDirection: "row",
    display: "flex",
    marginLeft: "auto",
    marginRight: 0,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2
  },
  userName: {
    fontSize: 16,
    marginTop: 3
  },
  userMessage: {
    fontSize: 14,
    color: TEXT_TITLE,
    marginTop: 5,
    alignSelf: "flex-end"
  },
  userTime: {
    fontSize: 11,
    color: GRAY,
    alignSelf: "flex-end",
    textAlign: "right"
  },
  msgIcon: {
    fontSize: 26,
    color: GRAY,
    marginTop: 3,
    alignSelf: "flex-end",
    marginRight: -10
  },
  textMsgCountView: {
    fontSize: 12,
    color: WHITE,
    backgroundColor: LIGHT_GREEN,
    justifyContent: "center",
    alignSelf: "flex-end",
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginTop: 10
  },
  textMsgCount: {
    fontSize: 12,
    color: WHITE,
    justifyContent: "center",
    alignSelf: "center"
  },
  cardView: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    marginTop: 2,
    marginBottom: 2,
  }
};

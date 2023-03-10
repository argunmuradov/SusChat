import React from "react";
import {
  GRAY,
  TEXT_TITLE
} from "../../utils/webColors";
import { getTimeInFormat } from "../../utils/webHelperFunctions";
import { Card, Typography } from "@mui/material";

const ChatRoomLeftItem = ({ item, styleList }) => {

  console.log("the item is:" + item)
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

export default ChatRoomLeftItem;

const styles = {
  parentView: {
    marginLeft: "2%",
    maxWidth: "60%",
    justifyContent: "flex-start",
    flexDirection: "row",
    display: "flex",
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: "2%",
    marginTop: '2%',
  },
  userName: {
    fontSize: 16,
    marginTop: 3
  },
  userMessage: {
    fontSize: 14,
    color: "white",
    marginTop: 3,
    alignSelf: "flex-start",

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
  cardView: {
    backgroundColor: "black",
    paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    marginTop: 2,
    marginBottom: 2,
  }
};

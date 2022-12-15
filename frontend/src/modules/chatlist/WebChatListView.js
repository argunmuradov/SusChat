import React from "react";
import WebChatListItem from "./WebChatListItem";
import EmptyComponent from "../../components/WebEmptyComponent";
import { WHITE, BLACK } from "../../utils/webColors";
import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 60,
});

const WebChatListView = ({ onItemClick, userChatList }) => {
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        borderRadius: 0,
        backgroundColor: BLACK,
      }}
    >
      {userChatList.length === 0 && (
        <EmptyComponent message={"Being private and unreachable... perhaps a bit too much?"} />
      )}

      <List
        style={{
          height: "100%",
          width: "100%",
          outline: "none",
        }}
        rowCount={userChatList.length}
        height={window.innerHeight}
        width={window.innerWidth - window.innerWidth / 3.2}
        rowHeight={cache.rowHeight}
        rowRenderer={({ index, parent, key, style }) => (
          <CellMeasurer
            key={key}
            cache={cache}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
          >
            <WebChatListItem
              item={userChatList[index]}
              position={index}
              onItemClick={onItemClick}
            />
          </CellMeasurer>
        )}
        overscanRowCount={0}
        data={userChatList}
      />
    </div>
  );
};

export default WebChatListView;
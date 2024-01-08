import { Box, CircularProgress, Input } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import userApi from "../../services/user";
import UserChatItem from "./UserChatItem";
import messageApi from "../../services/message-api";
import { useDispatch } from "react-redux";
import { setMessage } from "../../slice/messageSlice";
import { set1n } from "../../slice/handlerSlice";

const UsersList = ({ socket }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userQuery, setUserQuery] = useState("");
  const [userChatList, setUserChatList] = useState([]);
  const [userSelected, setUserSelected] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchUsers = async () => {
    const res = await userApi.getUsers();
    setUsers(res.filter((u) => u._id !== user?._id));
    setIsLoading(false);
  };
  const fetchUsersChatList = async () => {
    const res = await messageApi.getUserChat(user?._id);
    setUserChatList(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
    fetchUsersChatList();
  }, []);
  if (socket.current) {
    socket.current.on("msg-recieve", async () => {
      fetchUsersChatList();
    });
  }

  const dispatch = useDispatch();

  const filteredUsers = useMemo(() => {
    return userQuery.length
      ? users.filter((u) =>
          u.userName.toLowerCase().includes(userQuery.toLowerCase())
        )
      : [];
  }, [userQuery, users]);

  const handleSelectUser = async (e) => {
    const messageData = await messageApi.get({ from: user._id, to: e._id });

    if (messageData?.length) {
      messageData.map(async (mess) => {
        await messageApi.updateSeen(mess._id);
      });
    }

    dispatch(setMessage(messageData));
    dispatch(
      set1n({
        status: true,
        data: e,
      })
    );
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box
      width={"20%"}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Input
        name="search"
        variant="text"
        placeholder="search user..."
        onChange={(e) => setUserQuery(e.target.value)}
      />

      {(filteredUsers.length ? filteredUsers : userChatList).map((user) => (
        <UserChatItem
          key={user._id}
          user={user}
          onSelectUser={handleSelectUser}
          lastMessage={user?.lastMessage}
          setUserSelected={setUserSelected}
          style={{
            backgroundColor: userSelected === user._id ? "#aadb78" : "",
          }}
        />
      ))}
    </Box>
  );
};

export default UsersList;

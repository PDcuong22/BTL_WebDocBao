import { Avatar, Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const UserChatItem = ({
  user,
  onSelectUser,
  lastMessage = "",
  style,
  setUserSelected,
}) => {
  const [isSeen, setIsSeen] = useState(user?.seen || false);

  const updateSeen = async () => {
    try {
      setIsSeen(true);
    } catch (error) {
    } finally {
      setUserSelected(user._id);
      onSelectUser(user);
    }
  };

  return (
    <Paper
      sx={{
        ...style,
        padding: 2,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        gap: 2,
        cursor: "pointer",
      }}
      onClick={updateSeen}
    >
      <Avatar
        src={faker.image.avatar()}
        alt={user.userName}
        sx={{
          border: !isSeen ? "3px solid red" : "none",
        }}
      />
      <Box>
        <Typography fontSize={18} fontWeight={600}>
          {user.userName}
        </Typography>
        <Typography
          fontWeight={isSeen ? 0 : 600}
          color={isSeen ? "#777" : "#000"}
        >
          {lastMessage}
        </Typography>
      </Box>
    </Paper>
  );
};

export default UserChatItem;

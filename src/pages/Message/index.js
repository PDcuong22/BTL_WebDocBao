import React, { useEffect, useRef } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Box, Container } from "@mui/material";
import UsersList from "../../components/Message/UsersList";
import { io } from "socket.io-client";
import FormChat from "../../components/Message/UserChat";
import { useSelector } from "react-redux";
import BoxChat from "../../components/Message/BoxChat";
import { host } from "../../services/socket";

const Message = () => {
  const chat = useSelector((state) => state.handler.n1);

  const socket = useRef();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit("user", user._id);
    }
  }, [user]);

  return (
    <div style={{ height: "100vh" }}>
      <Header socket={socket} />
      <Container
        sx={{
          overflow: "auto",
          display: "flex",
          minHeight: "70%",
        }}
      >
        <UsersList socket={socket} />

        <Box
          flexGrow={1}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {chat.data._id && (
            <BoxChat props={{ user, chat: chat.data }} socket={socket} />
          )}
          <Box sx={{ mt: "auto" }}>
            {chat.data._id && (
              <FormChat
                props={{ from: user._id, to: chat.data._id }}
                socket={socket}
                chat={chat}
              />
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Message;

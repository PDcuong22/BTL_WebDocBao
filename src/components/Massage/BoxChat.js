import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import messageApi from "../../services/message-api";
import { setMessage } from "../../slice/messageSlice";
import { faker } from "@faker-js/faker";

const BoxChat = ({ props, socket }) => {
  const messages = useSelector((state) => state.message.data);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", async () => {
        const mess = await messageApi.get({
          from: props.user._id,
          to: props.chat._id,
        });
        dispatch(setMessage(mess));
      });
    }
  }, [dispatch, props.chat._id, props.user._id, socket]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, socket]);

  const MessLeft = (mess) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 2,
          gap: 2,
        }}
        ref={scrollRef}
      >
        <Avatar src={props.chat.avatar} alt={props.chat.fullname} />
        <Paper
          sx={{
            p: 1,
          }}
        >
          {mess.messages}
        </Paper>
      </Box>
    );
  };

  const MessRight = (mess) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: 2,
          mb: 2,
        }}
        ref={scrollRef}
      >
        <Paper
          sx={{
            p: 1,
          }}
        >
          {mess.messages}
        </Paper>
        <Avatar src={props.user.avatar} alt={props.user.fullname} />
      </Box>
    );
  };

  return (
    <Box sx={{ m: "0 auto" }}>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          gap: 2,
          cursor: "pointer",
          // position: "fixed",
          backgroundColor: "white",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Avatar src={faker.image.avatar()} alt={props.user.userName} />
        <Box>
          <Typography fontSize={18} fontWeight={600}>
            {props.chat.userName}
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          width: 500,
          height: 500,
          overflowY: "auto",
          bottom: 0,
        }}
      >
        <Box marginTop={10}>
          {!messages.length && (
            <Typography align="center">No message</Typography>
          )}
          {messages?.map((mess, index) => {
            if (mess.fromSelf) {
              return <MessRight key={index} {...mess} ref={scrollRef} />;
            }
            return <MessLeft key={index} {...mess} />;
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default BoxChat;

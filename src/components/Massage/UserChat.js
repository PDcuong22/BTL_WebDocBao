import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import messageApi from "../../services/message-api";
import { setMessage } from "../../slice/messageSlice";

const FormChat = ({ props, socket, chat }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const submitMess = async () => {
    if (!value.length) return;
    const data = {
      from: props.from,
      to: props.to,
      message: {
        text: value,
      },
    };

    try {
      await messageApi.add(data);
      const messageData = await messageApi.get({
        from: data.from,
        to: data.to,
      });

      dispatch(setMessage(messageData));
      socket.current.emit("send-msg", data);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateSeen = async () => {
    try {
      await messageApi.updateSeen(chat?.data?.messageId);
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <TextField
          name="message"
          placeholder="Message"
          sx={{ width: 400 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={updateSeen}
        />
        <IconButton onClick={submitMess}>
          <SendIcon
            sx={{ width: 40 }}
            color={value.length ? "primary" : "disabled"}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FormChat;

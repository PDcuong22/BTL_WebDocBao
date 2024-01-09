import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { articleApi } from "../../services/article-api";
import toast from "react-hot-toast";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";

const CommentItem = ({ comment, comments, setComments }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditComment, setIsEditComment] = useState(null);
  const [commentEdited, setCommentEdited] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditComment = async (comment) => {
    try {
      await articleApi.editComment(comment._id, {
        comment: commentEdited,
      });
      setIsEditComment(null);
      window.location.reload();
    } catch (error) {
      toast.error("error");
    }
  };
  const handleDeleteComment = async (comment) => {
    await articleApi.deleteComment(comment._id);
    window.location.reload();
  };
  const handleAdminLike = async (comment) => {
    try {
      await articleApi.adminLikeComment(user._id, comment._id);

      const commentIndex = comments.findIndex(
        (currentComment) => currentComment._id === comment._id
      );

      if (commentIndex !== -1) {
        const newComments = [...comments];
        newComments[commentIndex] = {
          ...newComments[commentIndex],
          adminLikes: !comment.adminLikes,
        };

        setComments(newComments);
      }
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <Paper sx={{ width: "100%", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight={600} fontSize={20}>
          {comment.author?.userName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontSize={14}>
            {moment(comment.createdAt).format("llll")}
          </Typography>
          {user?.role === "admin" && (
            <IconButton onClick={() => handleAdminLike(comment)}>
              {comment?.adminLikes || false ? (
                <ThumbUpAltIcon color="primary" />
              ) : (
                <ThumbUpOffAltIcon />
              )}
            </IconButton>
          )}
          {(user?.role === "admin" || user?._id === comment.author?._id) && (
            <div key={comment._id}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {user?._id === comment.author?._id && (
                  <MenuItem onClick={() => setIsEditComment(comment._id)}>
                    Edit
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleDeleteComment(comment)}>
                  Delete
                </MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      </Box>
      {isEditComment === comment._id ? (
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          defaultValue={commentEdited || comment.comment}
          onChange={(e) => setCommentEdited(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={() => handleEditComment(comment)}>
                  <SendIcon
                    color={commentEdited.length ? "success" : "disabled"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <Typography fontSize={20}>{comment.comment}</Typography>
      )}
    </Paper>
  );
};

export default CommentItem;

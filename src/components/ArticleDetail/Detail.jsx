import classNames from "classnames/bind";
import styles from "./ArticleDetail.module.scss";
import { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import { useParams } from "react-router";
import Moment from "moment";
import "moment/locale/vi";
import Right from "../Home/Right";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import toast from "react-hot-toast";
import CommentItem from "./CommentItem";
const cx = classNames.bind(styles);

function ArticleDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    Moment.locale("vi");
    getArticle();
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      let res = await articleApi.getCommentsByArticleId(params?.id);
      setComments(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getArticle = async () => {
    let res = await articleApi.getArticleById(params?.id);
    setArticle(res);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const isLiked = article[0]?.like?.includes(user?._id) || false;

  const handleComment = async () => {
    if (!user) return toast.error("Bạn chưa đăng nhập");
    const data = {
      comment,
      article: params.id,
      author: user?._id,
    };
    try {
      const res = await articleApi.createCommentByArticleId(params?.id, data);
      setComments([...comments, { ...res, author: user }]);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    if (!user) return toast.error("Bạn chưa đăng nhập");
    try {
      await articleApi.likeArticle(params?.id, user?._id);
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("header-item")}>
          <div className={cx("header-item12")}>
            <div className={cx("header-item1")}>
              {article[0]?.subCategoryId.categoryId.categoryName}
            </div>
            <div className={cx("header-item2")}>
              {article[0]?.subCategoryId.subCategoryName}
            </div>
          </div>
          <div className={cx("header-item3")}>{/*  */}</div>
        </div>

        <div className={cx("tittle")}>{article[0]?.articleName}</div>
        {article[0]?.content1?.split("\n").map((line, index) => (
          <div className={cx("content2")} key={index}>
            {line}
          </div>
        ))}

        {article[0]?.content ? (
          <></>
        ) : (
          <div className={cx("news")}>
            <img src={article[0]?.image} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: article[0]?.content }}></div>

        <div className={cx("content3")}>{article[0]?.imageTittle}</div>

        {article[0]?.content2?.split("\n").map((line, index) => (
          <div className={cx("content2")} key={index}>
            {line}
          </div>
        ))}
        <div className={cx("content4")}>{article[0]?.authorId.authorName}</div>

        {/* form comment */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #333",
            padding: 5,
            borderRadius: 5,
            gap: 5,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontWeight={600} fontSize={20}>
                {`Bài viết này ${!article[0]?.like?.length ? "chưa" : ""} có ${
                  article[0]?.like?.length || ""
                } lượt thích`}
              </Typography>
              <IconButton onClick={handleLike}>
                {isLiked ? (
                  <ThumbUpAltIcon color="primary" />
                ) : (
                  <ThumbUpOffAltIcon />
                )}
              </IconButton>
            </Box>
            <Typography fontWeight={600} fontSize={20}>
              Có {comments.length} bình luận
            </Typography>
            <Box
              sx={{
                maxHeight: 500,
                overflowY: "auto",
              }}
            >
              {comments
                .slice()
                .reverse()
                .map((comment, index) => (
                  <CommentItem
                    key={index}
                    comment={comment}
                    comments={comments}
                    setComments={setComments}
                  />
                ))}
            </Box>
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%" }}
              name="comment"
              label="Bình luận bài biết"
              variant="outlined"
              value={comment}
              placeholder="Thêm bình luận..."
              onChange={(e) => setComment(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      disabled={!comment.length}
                      onClick={handleComment}
                    >
                      <SendIcon
                        color={comment.length ? "success" : "disabled"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </div>
      <div className={cx("right")}>
        <Right
          subCategoryId={article[0]?.subCategoryId?._id}
          articleId={article[0]?._id}
        />
      </div>
    </div>
  );
}

export default ArticleDetail;

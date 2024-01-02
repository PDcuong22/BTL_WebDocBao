import Footer from "../../common/Footer";
import Header from "../../common/Header";

import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import Right from "../../Home/Right";
import { useEffect, useMemo, useState } from "react";
import { articleApi } from "../../../services/article-api";
import { Box, Input, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);
function HomeLayout({ content }) {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDate = async () => {
      const res = await articleApi.getArticles();
      setNews(res);
    };
    fetchDate();
  }, []);

  const searchData = useMemo(() => {
    return searchQuery.length
      ? news.filter((n) =>
          n.articleName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  }, [searchQuery, news]);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>
        <Box m={3} sx={{ width: "400" }}>
          <Input
            placeholder="Tìm bài viết..."
            sx={{ width: 300 }}
            color="success"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Box
            sx={{
              maxHeight: 500,
              overflow: "auto",
            }}
          >
            {searchData?.map((data) => (
              <Paper
                onClick={() => navigate(`/detail/${data?._id}`)}
                className={cx("paper")}
                key={data?._id}
                sx={{
                  display: "flex",
                  width: 300,
                  mt: 1,
                  cursor: "pointer",
                }}
              >
                <img
                  alt="data?.articleName"
                  src={data?.image}
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                />
                <Typography sx={{ pl: 1, fontSize: 20, fontWeight: "600" }}>
                  {data?.articleName.length > 30
                    ? data?.articleName.slice(0, 30) + "..."
                    : data?.articleName}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
        <div className={cx("partLeft")}>{content}</div>
        <div className={cx("partRight")}>
          <Right subCategoryId="64c9322480b0ef3155bbcaef" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;

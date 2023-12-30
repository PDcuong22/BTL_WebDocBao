import React, { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  SpeedDial,
  SpeedDialIcon,
  TextField,
  Typography,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NewsModal from "../../components/Admin/newsModal";
import moment from "moment";
import toast from "react-hot-toast";

const CardNews = ({ article }) => {
  const handleDelete = async () => {
    try {
      await articleApi.deleteArticle(article._id);
      toast.success(`Article deleted successfully`);
      window.location.reload();
    } catch (error) {
      toast.error("Error deleting article");
    }
  };
  return (
    <Card sx={{ width: 300, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="120"
        image={article.image}
        alt={article.header}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {article.header}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {moment(article.createdAt).format("llll")}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxHeight: 100 }}
        >
          Thể loại:{" "}
          <b>
            <i>{article.subCategoryId?.subCategoryName}</i>
          </b>
        </Typography>
      </CardContent>
      <Button
        fullWidth
        color="error"
        variant="contained"
        sx={{ mt: "auto" }}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Card>
  );
};

const News = () => {
  const [article, setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataResearch, setDataResearch] = useState([]);
  const [open, setOpen] = useState(false);
  const countPage = 10;

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticles();
    setArticle(res);
  };

  useEffect(() => {
    let currentNews = search.length
      ? article.filter((a) =>
          a.header.toLowerCase().includes(search.toLowerCase())
        )
      : article;
    setDataResearch(currentNews);
  }, [search, article]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        p: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <TextField
          fullWidth
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </Box>
      {!article.length ? (
        <CircularProgress />
      ) : (
        dataResearch
          .slice((currentPage - 1) * countPage, currentPage * countPage)
          .map((data) => <CardNews key={data._id} article={data} />)
      )}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          alignItems: "center",
          right: 0,
          backgroundColor: "rgba(255, 255, 255)",
        }}
      >
        <Button
          onClick={() => {
            if (currentPage <= 1) return;
            setCurrentPage((prev) => prev + (prev >= 1 ? -1 : 1));
          }}
        >
          <ArrowLeftIcon />
        </Button>
        <Typography>{currentPage}</Typography>
        <Button
          onClick={() => {
            setCurrentPage((prev) => prev + (prev >= 1 ? 1 : -1));
          }}
        >
          <ArrowRightIcon />
        </Button>
      </Box>

      <SpeedDial
        ariaLabel="dat"
        sx={{ position: "fixed", bottom: 50, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={() => setOpen(true)}
      />
      <NewsModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default News;

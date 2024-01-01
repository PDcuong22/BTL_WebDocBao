import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { authorApi } from "../../services/author-api";
import { subCateogryApi } from "../../services/subCateogry-api";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Editor from "../Editer";
import toast from "react-hot-toast";
import { articleApi } from "../../services/article-api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "80vh",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const initialArticle = {
  articleName: "",
  tittle: "",
  header: "",
  content: "",
  content1: "",
  content2: "",
  authorId: "",
  subCategoryId: "",
  level: 1,
  image: "",
  imageTittle: "",
};

const NewsModal = React.memo(({ open, setOpen }) => {
  const [category, setCategory] = React.useState([]);
  const [author, setAuthor] = React.useState([]);
  const [articleData, setArticleData] = React.useState(initialArticle);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [authors, categories] = await Promise.all([
          authorApi.gets(),
          subCateogryApi.getAllSubCategories(),
        ]);

        setAuthor(authors);
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!articleData.authorId.length) {
      return toast.error("Author is required");
    }
    if (!articleData.subCategoryId.length) {
      return toast.error("Category is required");
    }

    try {
      await articleApi.createArticles(articleData);
      toast.success("Đã tạo thành công");

      handleClose();
      window.location.reload();
    } catch (error) {
      toast.error(error.data?.error);
    } finally {
      setArticleData(initialArticle);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" textAlign="center" component="h2">
          Tạo bài viết mới
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 5 }}
        >
          <TextField
            fullWidth
            label="Article Name"
            name="articleName"
            required
            value={articleData.articleName}
            onChange={(e) =>
              setArticleData({ ...articleData, articleName: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Title"
            name="tittle"
            required
            value={articleData.tittle}
            onChange={(e) =>
              setArticleData({ ...articleData, tittle: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Header"
            name="header"
            required
            value={articleData.header}
            onChange={(e) =>
              setArticleData({ ...articleData, header: e.target.value })
            }
          />
          {articleData.image.length ? (
            <img
              src={articleData.image}
              alt="articleImage"
              style={{ width: "200px", height: "100px", objectFit: "cover" }}
            />
          ) : (
            <></>
          )}
          <TextField
            fullWidth
            label="Image"
            name="image"
            required
            value={articleData.image}
            onChange={(e) =>
              setArticleData({ ...articleData, image: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="imageTitle"
            name="imageTitle"
            required
            value={articleData.imageTittle}
            onChange={(e) =>
              setArticleData({ ...articleData, imageTittle: e.target.value })
            }
          />

          {!author.length || !category.length ? (
            <CircularProgress />
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <FormControl fullWidth>
                <InputLabel>Level</InputLabel>
                <Select
                  value={articleData.level}
                  label="Level"
                  required
                  onChange={(e) =>
                    setArticleData((prev) => ({
                      ...prev,
                      level: e.target.value,
                    }))
                  }
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Author</InputLabel>
                <Select
                  defaultValue={
                    author.find((a) => a._id === articleData.authorId)
                      ?.authorName
                  }
                  required
                  label="Author"
                  onChange={(e) =>
                    setArticleData((prev) => ({
                      ...prev,
                      authorId: e.target.value,
                    }))
                  }
                >
                  {author.map((a) => (
                    <MenuItem value={a._id} key={a._id}>
                      {a.authorName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  defaultValue={
                    category.find((a) => a.categoryId === articleData.authorId)
                      ?.subCategoryName
                  }
                  label="Category"
                  onChange={(e) =>
                    setArticleData((prev) => ({
                      ...prev,
                      subCategoryId: e.target.value,
                    }))
                  }
                >
                  {category.map((a) => (
                    <MenuItem value={a._id} key={a._id}>
                      {a.subCategoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          <Editor
            content={articleData.content}
            setContent={(content) =>
              setArticleData((prev) => ({
                ...prev,
                content: content,
              }))
            }
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" color="warning" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
});

export default NewsModal;

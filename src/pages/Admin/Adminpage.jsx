import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { articleApi } from '../../services/article-api';
import { useNavigate } from 'react-router';
import Header from './Header';
import { toast } from 'react-toastify';

const AdminPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await articleApi.getArticles(search);
      setArticles(data);
    };

    fetchArticles();
  }, [page, search]); // If your API supports it, you might want to re-fetch articles when the page changes

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset back to the first page
  };

  const handleAddArticle = () => {
    navigate("/admin/article/create");
  };

  const handleEdit = (articleId) => {
    navigate("/admin/article/edit/" + articleId);
  };

  const handleDeleteClick = (articleId) => {
    setCurrentArticleId(articleId);
    setOpenDeleteDialog(true);
  };
  
  const handleDelete = async () => {
    setOpenDeleteDialog(false);
    await articleApi.deleteArticle(currentArticleId).then(() => {
      toast.success("Article deleted successfully");
      setOpenDeleteDialog(false);
    })
    .catch(() => {
      toast.error("Failed to delete the article");
    });
    setArticles(await articleApi.getArticles());
  };

  return (<>
        <Container>
        <Header />
        {/* Spacing between AppBar and content */}
        <Box mt={2} mb={4}>
            <Container>
            {/* Use Grid to layout the search and add button */}
            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item>
                <TextField
                    label="Search Articles"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" onClick={handleAddArticle}>
                    Add Article
                </Button>
                </Grid>
            </Grid>
            </Container> 
        </Box>
        <Paper mt={2}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                {/* Add more headers based on your article properties */}
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {articles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((article) => (
                <TableRow key={article._id}>
                    <TableCell style={{ cursor: 'pointer' }}><a onClick={() => navigate(`/detail/${article._id}`)}>{article.articleName}</a></TableCell>
                    <TableCell>{article.authorId}</TableCell>
                    {/* Render more article properties as needed */}
                    <TableCell>
                    <Button color="primary" onClick={() => handleEdit(article._id)}>
                        Edit
                    </Button>
                    <Button color="secondary" onClick={() => handleDeleteClick(article._id)}>
                        Delete
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            <TablePagination
            component="div"
            count={articles.length} // The total number of articles
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        <Dialog
            open={openDeleteDialog}
            onClose={() => setOpenDeleteDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this article?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
                Cancel
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                Confirm
                </Button>
            </DialogActions>
            </Dialog>
        </Container>
    </>
  );
};

export default AdminPage;

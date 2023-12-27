import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { articleApi } from '../../services/article-api';
import Header from './Header';
import { toast } from 'react-toastify';

const CreateArticlePage = () => {
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [cateId, setCateId] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [formData, setFormData] = useState({
    tittle: '',
    header: '',
    content1: '',
    subCategoryId: '',
    authorId: '',
    level: 2,
    articleName: '',
  });

  useEffect(() => {
    articleApi.getSubCategories().then(setSubCategories);
    articleApi.getAuthors().then(setAuthors);
    articleApi.getCategories().then(setCategories);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, content1: content });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await articleApi.createArticle(formData);
      toast.success("Article created successfully");
      navigate('/admin');
    } catch (error) {
      toast.error("Failed to create the article");
    }
  };

  const handleAddAuthor = async () => {
    try {
      await articleApi.createAuthor(authorName);
      const updatedAuthors = await articleApi.getAuthors();
      setAuthors(updatedAuthors);
      setOpenModal(false);
      setAuthorName('');
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  const handleAddSubCate = async () => {
    try {
      await articleApi.createSubCate(subCategoryName, cateId);
      const updatedAuthors = await articleApi.getSubCategories();
      setSubCategories(updatedAuthors);
      setOpenModal2(false);
      setSubCategoryName('');
    } catch (error) {
      console.error('Error adding subcate:', error);
    }
  };

  return (<>
    <Container>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Create Article</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <TextField
          label="Title"
          name="tittle"
          value={formData.tittle}
          onChange={handleChange}
          fullWidth
          style={{ marginTop: '10px' }}
        />
        <TextField
          label="Header"
          name="header"
          value={formData.header}
          onChange={handleChange}
          fullWidth
          style={{ marginTop: '10px' }}
        />
        <TextField
          label="Article Name"
          name="articleName"
          value={formData.articleName}
          onChange={handleChange}
          fullWidth
          style={{ marginTop: '10px' }}
        />
        
        {/* SubCategory Dropdown */}
        <FormControl fullWidth
          style={{ marginTop: '10px' }}
        >
          <InputLabel>SubCategory</InputLabel>
          <Select
            name="subCategoryId"
            value={formData.subCategoryId}
            onChange={handleChange}
          >
            {subCategories.map((subCategory) => (
              <MenuItem key={subCategory._id} value={subCategory._id}>
                {subCategory.subCategoryName}
              </MenuItem>
            ))}
          </Select>
          <Button variant="outlined" onClick={() => setOpenModal2(true)}>Add</Button>
        </FormControl>
        {/* Author Dropdown */}
        <FormControl fullWidth
          style={{ marginTop: '10px' }}
        >
          <InputLabel>Author</InputLabel>
          <Select
            name="authorId"
            value={formData.authorId}
            onChange={handleChange}
          >
            {authors.map((author) => (
              <MenuItem key={author._id} value={author._id}>
                {author.authorName}
              </MenuItem>
            ))}
          </Select>
          <Button variant="outlined" onClick={() => setOpenModal(true)}>Add</Button>
        </FormControl>
        {/* Rich Text Editor for content1 */}
        <ReactQuill
          value={formData.content1}
          onChange={handleEditorChange}
          style={{ height: '300px', marginTop: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary" 
          style={{ marginBlock: '100px', marginInline: 'auto' }}
        >
          Create Article
        </Button>
      </form>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Add a New Author</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Author Name"
            type="text"
            fullWidth
            variant="outlined"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddAuthor} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModal2} onClose={() => setOpenModal2(false)}>
        <DialogTitle>Add a New SubCategory</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="SubCategory Name"
            type="text"
            fullWidth
            variant="outlined"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
          />
          <FormControl fullWidth
            style={{ marginTop: '10px' }}
            >
            <InputLabel>Category</InputLabel>
            <Select
                name="subCategoryId"
                value={cateId}
                onChange={(e) => setCateId(e.target.value)}
            >
                {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                    {category.categoryName}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal2(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddSubCate} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>);
};

export default CreateArticlePage;

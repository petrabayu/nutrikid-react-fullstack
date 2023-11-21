import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postArticle } from './articleSlice';

function ArticleInput() {
   // Use the useDispatch hook to access the redux store
  const dispatch = useDispatch();

  // Use the useState hook to manage the local state of the form inputs
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState(''); // A state for the image preview

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form
    e.preventDefault();
    // Create an article object from the form inputs
    const article = { author, title, theme, image, content };
    // Dispatch the postArticle action with the article object as the payload
    dispatch(postArticle(article));
    // Reset the form inputs
    setAuthor('');
    setTitle('');
    setTheme('');
    setImage('');
    setContent('');
    setPreview(''); // Reset the image preview
  };

  // Define a function to handle the change of the form inputs
  const handleChange = (e) => {
    // Get the name and value of the input element
    const { name, value } = e.target;
    // Update the corresponding state according to the name
    switch (name) {
      case 'author':
        setAuthor(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'theme':
        setTheme(value);
        break;
      case 'image':
        setImage(value);
        // If the value is a valid URL, set the preview state to the value
        if (isValidUrl(value)) {
          setPreview(value);
        } else {
          // Otherwise, set the preview state to an empty string
          setPreview('');
        }
        break;
      case 'content':
        setContent(value);
        break;
      default:
        break;
    }
  };

  // Define a function to handle the file input of the image
  const handleFile = (e) => {
    // Get the file object from the input element
    const file = e.target.files[0];
    // If the file exists and is an image, create a URL for the file and set the image and preview states to the URL
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setPreview(url);
    } else {
      // Otherwise, set the image and preview states to empty strings
      setImage('');
      setPreview('');
    }
  };

  // Define a function to check if a string is a valid URL
  const isValidUrl = (string) => {
    try {
      // Create a new URL object from the string
      new URL(string);
      // If no error is thrown, return true
      return true;
    } catch (error) {
      // If an error is thrown, return false
      return false;
    }
  };


  return (
    <form  onSubmit={handleSubmit}>
    <h3 className='container col-md-6'>Input Article</h3>
    <div className=" container col-md-6">
        <label className="form-label" for="form6Example3" htmlFor="title">Title</label>
        <input 
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            required
        />
    </div>

    <div className=" container col-md-6">
        <label className="form-label" for="form6Example3" htmlFor="author">Author</label>
        <input 
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={handleChange}
            required
        />
    </div>

    <div className="container col-md-6">
    <label className="form-label" for="form6Example3">Image</label>
    <div className="mb-5">
        <input 
        className="form-control" 
        type="file" 
        id="formFile" 
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="Enter a URL or upload a file"
        />
        <input type="file" id="file" name="file" onChange={handleFile} />
      {preview && <img src={preview} alt="Preview" />}
        <button onclick="clearImage()" className="btn btn-primary mt-3">Click me</button>
    </div>
    <img id="frame" src="" className="img-fluid"/>
    </div>

    <div className="container col-md-6">
    <label className="form-label" for="form6Example3">Theme</label>
        <form className="px-4" action="">
            <p className="fw-bold">Choose one theme of your article</p>
            <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="Nutrisi" 
            name='theme'
            value="Nutrisi" 
            checked={theme === 'Nutrisi'}
            onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Nutrisi">
                Nutrisi
            </label>
            </div>

            <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="Parenting" 
            name='theme'
            value="Parenting" 
            checked={theme === 'Parenting'}
            onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Parenting">
                Parenting
            </label>
            </div>

            <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="Lifestyle" 
            name='theme'
            value="Lifestyle" 
            checked={theme === 'Lifestyle'}
            onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Lifestyle">
                Lifestyle
            </label>
            </div>
        </form>
    </div>

    <div className="container col-md-6">
    <label className="form-label" htmlForfor="content">Article</label>
        <textarea 
        className="form-control" 
        id="content" 
        name="content"
        value={content}
        onChange={handleChange}
        required
        rows="10"
        />
    </div>

    <div className="form-check container col-md-6">
        <div className='container'>
        <div className='col'>
        <input 
        className="form-check-input me-2" 
        type="checkbox" 
        value="" 
        id="form6Example8" 
        checked />
        <label className="form-check-label" for="form6Example8">
        Submit your article?
        </label>
        </div>
        <div className='col'>
        <button type="submit" className="btn btn-primary btn-block mb-3">
        Submit
        </button>
        </div>
        </div>
        
    </div>
    </form>
  )
}

export default ArticleInput


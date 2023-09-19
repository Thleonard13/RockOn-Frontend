import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { blogposts } from '../BlogPosts';
import "./SingleBlog.css"

const SingleBlog = () => {

// retrieve blog post data from local database
const articleId = useParams().id;
const article = blogposts.find(post => post.id == articleId)

//breaks the text into paragraphs with link breaks
const blogText = article.description.split('\n').map((paragraph, index) => (
  <React.Fragment key={index}>
    {paragraph}
    <br />
  </React.Fragment>
));

  return (
    <div id='article-page'>
      <article id='blog-article'>
        <h2>{article.title}</h2>
        <div>
          <p>Written By: {article.author} - {article.datePublished}</p>
        </div>
        <div className="blog-img">
          <img src={require("../" + article.image)}/>
        </div>
        <p>{blogText}</p>
        <Link to="/blog"><button>Back To Blog</button></Link>
      </article>
    </div>
  )
}

export default SingleBlog
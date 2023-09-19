import React from 'react'
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
    const { id, title, description, image, datePublished } = props.post;
  return (
    <Link to={"/blogpost/" + id}>
      <div className="blog-box">
            <div className="blog-img">
                <img src={require("./" + image)}/>
            </div>
            <div className="blog-details">
                <h4>{title}</h4>
                <p>{description.slice(0, 200)}...</p>
                <p href="#">...Continue Reading...</p>
                <h1>{datePublished}</h1>
            </div>
        </div>
     </Link>
  )
}

export default BlogPost
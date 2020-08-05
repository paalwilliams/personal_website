import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Utils/Loading';
import axios from 'axios';
import './Posts.css';

const Posts = () => {
  let [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get(`https://api.paaa.al/posts/`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finished');
      });
  }, []);
  if (!posts) {
    return <Loading />;
  } else {
    return posts.map((post) => {
      return (
        <div className='post-entry'>
          <h1>
            <Link to={`/blog/post/${post.id}`}>{post.Title}</Link>
          </h1>
          <p className='post-author'>
            {post.created_by.firstname} {post.created_by.lastname}{' '}
          </p>
          {post.headerimage ? (
            <Link to={`/blog/post/${post.id}`}>
              <img
                className='post-image'
                src={`https://api.paaa.al${post.headerimage.url}`}
                key={post.id}
                alt=''
              />
            </Link>
          ) : (
            ''
          )}
        </div>
      );
    });
  }
};

export default Posts;

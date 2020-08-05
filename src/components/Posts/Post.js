import React, { useState, useEffect } from 'react';
import './Post.css';
import Loading from '../Utils/Loading';
import NoMatch from '../Utils/NoMatch';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = (props) => {
  let [post, setPost] = useState({
    post: null,
    error: null,
  });

  let num = '';
  let { id } = useParams();
  if (id) {
    num = id;
  }

  useEffect(() => {
    axios
      .get(`http://api.paaa.al/posts/${num}`)
      .then((response) => {
        setPost({
          post: response.data,
        });
        console.log(response.data);
      })
      .catch((err) => {
        setPost({
          ...post,
          error: 404,
        });
      })
      .finally(() => {
        console.log('finished');
      });
  }, []);
  if (post.error) {
    return <NoMatch />;
  }
  if (!post.post) {
    console.log('no post');
    return <Loading />;
  } else {
    console.log('post');
    return (
      <div id='post'>
        <h1>{post.post.Title}</h1>
        <p>
          by {post.post.created_by.firstname} {post.post.created_by.lastname}{' '}
        </p>
        {post.post.Body.split('\n').map((i, key) => {
          if (i.length === 0) {
            return <br key={key} />;
          } else {
            return <div key={key}>{i}</div>;
          }
        })}
      </div>
    );
  }
};

export default Post;

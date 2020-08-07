import React, { useEffect, useState } from 'react';
import Loading from '../Utils/Loading';
import axios from 'axios';
import './Home.css';

const Home = () => {
  let [home, setHome] = useState();
  useEffect(() => {
    axios
      .get('https://api.paaa.al/home')
      .then((response) => {
        setHome(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setHome({
          error: 404,
        });
      })
      .finally(() => {
        console.log('finished');
      });
  }, []);
  if (!home) {
    return <Loading />;
  } else {
    return (
      <div className='home-body'>
        <h1>{home.title}</h1>
        {home.body.split('\n').map((i, key) => {
          if (i.length === 0) {
            return <br key={key} />;
          } else if (i[0] === '!') {
            // Get alt text from
            let b1 = i.indexOf('[');
            let b2 = i.indexOf(']');
            let alt = i.slice(b1 + 1, b2);

            // Get img url
            let p1 = i.indexOf('(');
            let p2 = i.indexOf(')');
            let img = i.slice(p1 + 1, p2);

            return (
              <img alt={alt} key={alt} src={`https://api.paaa.al${img}`}></img>
            );
          } else {
            return (
              <div className='post-body' key={key}>
                {i}
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Home;

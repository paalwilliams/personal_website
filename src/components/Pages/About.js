import React, { useEffect, useState } from 'react';
import Loading from '../Utils/Loading';
import axios from 'axios';
import marked from 'marked';
import './About.css';

const About = () => {
  let [about, setAbout] = useState();
  useEffect(() => {
    axios
      .get('https://api.paaa.al/about')
      .then((response) => {
        setAbout(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!about) {
    return <Loading />;
  } else {
    return (
      <div class='about-body'>
        <h1>{about.aboutitle}</h1>
        {about.aboutbody.split('\n').map((i, key) => {
          if (i.length === 0) {
            return <br key={key} />;
          } else if (i[0] === '!') {
            // Get alt text
            let b1 = i.indexOf('[');
            let b2 = i.indexOf(']');
            let alt = i.slice(b1 + 1, b2);

            // Get img url
            let p1 = i.indexOf('(');
            let p2 = i.indexOf(')');
            let img = i.slice(p1 + 1, p2);

            return <img alt={alt} src={`https://api.paaa.al${img}`}></img>;
          } else {
            return <div key={key}>{i}</div>;
          }
        })}
      </div>
    );
  }
};

export default About;

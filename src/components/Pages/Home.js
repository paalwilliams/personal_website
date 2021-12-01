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
                <h1>Hi! I'm Paal.</h1>
                <p>I'm a front-end web developer living and working in St. Louis, Missouri. I graduated from Lesley University in 2017 with a Bachelor's of Fine Art in photography and art history.
                    Before transitioning my career, I worked in galleries and museums doing project management. My background in fine art and exhibition curation helps me to effectively distill complicated visual philosophies to user friendly design.

                    Currently, I'm an Associate Applications Developer at Mercy. If you have questions about freelance or project work, please contact me.</p>
            </div>
        );
    }
};

export default Home;

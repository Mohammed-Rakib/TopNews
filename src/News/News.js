import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';


const News = () => {

    const [ news, setNews ] = useState([]);
    console.log(news);
    useEffect(() =>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c9fa0893d82f4ae0bf2bba765192a7c2')
        .then(response => response.json())
        .then(data => setNews(data.articles))
        },[])
    return (

        <div className="container my-5">
            <div className="row d-flex justify-content-between">
               {
                   news.map(news => <Cart news={news} key={news.publishedAt}></Cart>)
               }
            </div>
        </div>

    );
};

export default News;
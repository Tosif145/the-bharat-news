import React, { useState } from 'react';
import './css/HomeScreen.css';
import articles from '../data/news.js';
import Content from './News/Content.js';
import Special from './News/Special.js';
import RightNews from './News/RightNews.js';
import { Link } from 'react-router-dom';



const HomeScreen = () => {
  
  return (
    <>
       <section>
        <div id="container">
           
            <div id="midbox" >
              
             
                   {/* Adding  news list */}
                   {articles.map((news) => (
                         news.id == 1 || news.id == 6 ? 
                         <Link to={`/content/${news.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                 <Special key={news.id} {...news} />
                          </Link>
                                  : 
                          <Link to={`/content/${news.id}` } style={{ textDecoration: 'none', color: 'black' }}>
                                  <Content key={news.id} {...news} />
                          </Link>
                    ))}


            </div>
             <RightNews/>
          </div>          
    </section>
    </>
  );
};

export default HomeScreen;

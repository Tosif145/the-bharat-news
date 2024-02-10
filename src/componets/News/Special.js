import React from 'react';
import '../css/HomeScreen.css';

const Special = ({id,title,summary,content,author,publishedDate,imageUrl}) => {
  const heading = id == 1? "TOP NEWS" : "DON'T MISS";
  return (
    
    <> 

       <br />
              <h1 id="midheadings"><span>[</span>{heading}<span>]</span></h1>
              <div id="modibox">
                <h3 style={{ color: 'teal', fontWeight: 'bold' }}>{title}</h3>
                <h1 style={{ fontSize: 'x-large', width: '100%' }}>
                {summary}
                </h1>
                <img
                  style={{ fontSize: 'x-large', width: '100%' }}
                  src={imageUrl}
                  alt="error"
                />
                <p>Published on {publishedDate} 12:11 PM IST</p>
                <img
                  id="share"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjW9U4VceErj7S76msNUAkXZHBU7EHuFiDg&usqp=CAU"
                  alt="error"
                />
                <img
                  id="bookmark"
                  src="https://www.pxpng.com/public/uploads/preview/-11608565643y2ec8jdhc7.png"
                  alt="error"
                />
              </div>
    </>
  )
}

export default Special

import React from 'react';
import '../css/HomeScreen.css';


const Content = ({id,title,summary,content,author,publishedDate,imageUrl}) => {
  return (

    <>
        {console.log(title)}
     
        <div id="secondmodi">
                <h3 style={{ color: 'teal', fontWeight: 'bold' }}>{title}</h3>
                <h3  style={{ width: '60%' }}>
                  {summary}
                </h3>
                <p>Published on {publishedDate} 12:11 PM IST</p>
          
                <img
                  id="secondmodi1"
                  src={imageUrl}
                />
              </div>

    </> 
  )
}

export default Content
